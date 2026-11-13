import moment from "moment";
import { JSEncrypt } from "jsencrypt";
import publicKey from '../public.pem'
import forge from 'node-forge'
import imageCompression from 'browser-image-compression';

import heic2any from "heic2any";
import * as XLSX from "xlsx";
import { api } from "../interfaces/api.interface";
import axios from "axios";

export const validPhone = /[^0-9+()-]|([+-])\1+/g
export const onlyPhone = (str) => {
  if (str.length > 0) {
    str = str?.replace(validPhone, '')
  }
  return str;
}

export const onlyDate = (date) => {
  return date ? moment(date).format('DD-MM-YYYY') : ''
}


export const formatPrice = (v) => {
  if (!v && (typeof v !== "string" || typeof v !== "number")) return "0"

  return Number(v).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

export const isEmptyObject = (obj) => {
  return Object.keys(obj).length == 0
}
export const setDataObject = (obj) => {

  Object.keys(obj).filter(item => {
    if (!item.includes('customer') && !item.includes('converted') && !item.includes('created') && (item.includes('accountclose') || item.includes('accountopen') || !item.includes('account'))) {
      if (item.includes('date') || item.includes('create') || item.includes('from') || item.includes('to')) {
        if (obj[item] == '' || obj[item] == undefined) {
          obj[item] = ""
        } else {
          if (item.includes('to') && moment(obj[item]).format('YYYYMMDDHHmmss') % 1000000 === 0) {
            obj[item] = moment(obj[item]).format('YYYYMMDDHHmmss') / 1000000 + '235959'
          }
          else {
            obj[item] = moment(obj[item]).format('YYYYMMDDHHmmss')
          }
        }
      } else if (obj[item] == '' || obj[item] == null) {
        obj[item] = ""
      }
    } else if (obj[item] == '' || obj[item] == null) {
      obj[item] = ""
    }
  })
  return obj
}

export const setDataObjectONOFF = (obj) => {
  Object.keys(obj).filter(item => {
    if (!obj[item]) {
      obj[item] = 0
    } else {
      obj[item] = 1
    }
  })
  return obj
}

export const setDateOnUpdateList = (date) => {
  if (date) {
    const year = date?.split('').slice(0, 4).join('')
    const month = date?.split('').slice(4, 6).join('')
    const day = date?.split('').slice(6, 8).join('')
    const hour = date?.split('').slice(8, 10).join('')
    const min = date?.split('').slice(10, 12).join('')
    const sec = date?.split('').slice(12, 14).join('')
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`
  } else {
    return ''
  }
}
export const imagePathToBase64 = async (imagePath) => {
  try {
    const response = await fetch(imagePath);
    const blob = await response.blob();

    return await new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result); // Full base64 string
      };

      reader.onerror = reject;

      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Error converting image to base64:", error);
    return null;
  }
};


function cleanBase64(value) {
  if (!value) return "";
  const trimmed = value.trim();

  if (trimmed.startsWith("data:")) {
    const comma = trimmed.indexOf(",");
    return comma >= 0
      ? trimmed.substring(comma + 1).replace(/\s/g, "")
      : "";
  }

  return trimmed.replace(/\s/g, "");
}

function base64ToBytes(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes;
}


function detectImageType(bytes) {
  if (
    bytes.length >= 3 &&
    bytes[0] === 0xff &&
    bytes[1] === 0xd8 &&
    bytes[2] === 0xff
  ) {
    return { type: "jpeg", mime: "image/jpeg", extension: "jpg" };
  }

  if (
    bytes.length >= 8 &&
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47
  ) {
    return { type: "png", mime: "image/png", extension: "png" };
  }

  const header = Array.from(bytes.slice(0, 32))
    .map((b) => String.fromCharCode(b))
    .join("");

  const isHeic =
    header.includes("ftypheic") ||
    header.includes("ftypheix") ||
    header.includes("ftyphevc") ||
    header.includes("ftyphevx") ||
    header.includes("ftypmif1") ||
    header.includes("ftypmsf1");

  if (isHeic) {
    return { type: "heic", mime: "image/heic", extension: "heic" };
  }

  return null;
}
export async function base64ToBlob(image) {
  const clean = cleanBase64(image);
  if (!clean) {
    throw new Error("Please enter a Base64 string.");
  }
  let bytes;
  try {
    bytes = base64ToBytes(clean);
  } catch {
    throw new Error("Invalid Base64 string.");
  }

  const detected = detectImageType(bytes);

  if (!detected) {
    console.warn("Unsupported or unknown image format.");
    return "";
  }
  const originalBlob = new Blob([bytes], { type: detected.mime });
  if (detected.type === "heic") {
    const result = await heic2any({
      blob: originalBlob,
      toType: "image/jpeg",
      quality: 0.92
    });

    const convertedBlob = Array.isArray(result) ? result[0] : result;

    return URL.createObjectURL(convertedBlob)
    //  {
    //   originalType: "HEIC/HEIF",
    //   outputType: "JPEG",
    //   blob: convertedBlob,
    //   url: URL.createObjectURL(convertedBlob),
    //   filename: "converted-image.jpg",
    //   byteSize: bytes.length
    // };
  }

  return URL.createObjectURL(originalBlob)
  //  {
  //   originalType: detected.type.toUpperCase(),
  //   outputType: detected.type.toUpperCase(),
  //   blob: originalBlob,
  //   url: URL.createObjectURL(originalBlob),
  //   filename: `converted-image.${detected.extension}`,
  //   byteSize: bytes.length
  // };
}

// export const base64ToBlob = (base64String) => {
//   // remove data url prefix if present
//   if (!base64String) return ''
//   const base64 = base64String?.includes(',')
//     ? base64String.split(',')[1]
//     : base64String;

//   const byteCharacters = atob(base64);
//   const byteNumbers = new Array(byteCharacters.length);

//   for (let i = 0; i < byteCharacters.length; i++) {
//     byteNumbers[i] = byteCharacters.charCodeAt(i);
//   }

//   const byteArray = new Uint8Array(byteNumbers);
//   const blob = new Blob([byteArray], { type: "image/jpeg" });
//   return URL.createObjectURL(blob);
// };

export const base64ToBlobFile = (base64) => {
  console.log()
  if (!base64) return ''
  const byteCharacters = atob(base64?.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'application/pdf' });

  return URL.createObjectURL(blob);
};

export const filterName = (list, id) => {
  return list?.length > 0 && list?.find(val => val?.codevalue == parseInt(id))?.displayvalue || ""
}

export const fetchPublicKey = async (pass) => {
  const encrypt = new JSEncrypt({ default_key_size: 4096 });
  const response = await fetch(publicKey);
  const text = await response.text();
  // encrypt.setPublicKey(text);
  // return encrypt.encrypt(pass);
  const key = forge.pki.publicKeyFromPem(text);
  const encrypted = key.encrypt(pass, 'RSA-OAEP', {
    md: forge.md.sha256.create(),
  });
  return forge.util.encode64(encrypted);

};
export const findPermission = (permissions, list) => {
  let foundPermission = null;
  list?.map((e, i) => {
    if (i == 0) {
      foundPermission = permissions?.find(val => val.PAGEPERMISSION.trim() == e)
    } else {
      foundPermission = foundPermission?.Children?.find(val => val.PAGEPERMISSION.trim() == e)
    }
  })

  return foundPermission.Children?.filter(e => e.ISENABLE == 1).map(e => e.PAGEPERMISSION);
}

export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});


export const downloadBase64File = (base64Data, defaultFileName) => {
  // Extract the MIME type and base64 data from the string
  console.log(base64Data)
  const [mimePart, dataPart] = base64Data?.split(',');
  const mimeType = mimePart.match(/:(.*?);/)[1]; // Extract the MIME type, e.g., 'image/png'

  const fileName = defaultFileName;

  // Decode the base64 string to binary data
  const binaryString = atob(dataPart);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // Create a blob from the binary data
  const blob = new Blob([bytes], { type: mimeType });

  // Create a download link and trigger the download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName; // Use the constructed file name with extension

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export const downloadJSON = (jsonData) => {
  // Convert JSON data to string
  const jsonString = JSON.stringify(jsonData, null, 2); // Pretty-print JSON with 2 spaces

  // Create a Blob from the JSON string
  const blob = new Blob([jsonString], { type: 'text/csv' });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create an <a> element to simulate download
  const link = document.createElement('a');
  link.href = url;
  link.download = 'data.csv'; // Filename for the download
  document.body.appendChild(link);

  // Programmatically trigger a click on the link to start download
  link.click();

  // Clean up and remove the link
  document.body.removeChild(link);
};

export const downloadExcel = (jsonData) => {
  const worksheet = XLSX.utils.json_to_sheet(jsonData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  XLSX.writeFile(workbook, "DataSheet.xlsx");
};

export const downloadFile = async (user, filename, filemodule, auditTrace) => {
  console.log(user, filename)
  if (filename) {
    const url = api.filedownload().url
    const method = api.filedownload().method
    const requestBody = {
      actuser: user.username?.toLowerCase(),
      filename: filename,
      filemodule: filemodule ? filemodule : 'Json',
      sessionid: user.sessionId,
      audittrace: auditTrace
    };
    const response = await axios[method](url, requestBody, {
      responseType: 'blob',
    })
    const fileBlob = new Blob([response.data], { type: response.headers['content-type'] });
    console.log(fileBlob)
    const downloadUrl = window.URL.createObjectURL(fileBlob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute('download', requestBody.filename);
    document.body.appendChild(link);
    link.click()
  } else {
    console.log('there is no file path')
  }
}

export const downloadbase64 = (file, name) => {
  console.log(file, 'here')
  const link = document.createElement("a");
  link.href = file;
  link.download = name; // file ka naam
  link.click();
};


export const digitalTabSelect = (value) => {
  switch (value) {
    case '101':
      return 0;
    case '102':
      return 1;
    case '103':
      return 1;
    case '104':
      return 3;
    case '105':
      return 4;
    case '106':
      return 5;
    default:
      return 0;
  }
}


export const digitalMerchantTabSelect = (value, legalentity) => {
  switch (value) {
    case '101':
      return 0;
    case '102':
      return 1;
    case '104':
      return 1;
    case '105':
      return legalentity == 1 ? 1 : 2;
    case '106':
      return legalentity == 1 ? 2 : 3;
    default:
      return 0;
  }
}

export const digitalMerchantPeriodicTabSelect = (value, legalentity) => {
  switch (value) {
    case '104':
      return 0;
    case '105':
      return legalentity == 1 ? 0 : 1;
    case '106':
      return legalentity == 1 ? 1 : 2;
    default:
      return 0;
  }
}

export const dateFormat = (date) => {
  if (date) {
    return moment(date).format('DD-MM-YYYY')
  } else {
    return ''
  }
}

export const alphaRegex = /^[A-Za-z ]*$/
export const alphaCapsRegex = /^[A-Z ]*$/
export const numberRegex = /^\d*$/
export const phoneNumberRegex = /^[0-9+\-\s]*$/
export const emailRegex = /^[a-zA-Z0-9@._+-]*$/
export const idRegex = /^[\d-]*$/
export const decimalRegex = /^[\d.]*$/
export const phoneRegex = /^[\d+]*$/
export const alphanumericRegex = /^[a-zA-Z0-9 ]*$/
export const alphaCapsnumericRegex = /^[A-Z0-9 ]*$/
export const alphaSpecialCharRegex = /^[a-zA-Z!@#$%^&*(),.?":{}|<>]+$/
export const capsAlphaNumericDash = /^[A-Z0-9-]*$/
export const alphaNumericDash = /^[a-zA-Z0-9-]*$/
export const numberWithForwardSlashAndPointRegex = /^[0-9/.]*$/
export const numberWithPointRegex = /^[0-9.]*$/
export const alphanumericWithPointRegex = /^[a-zA-Z0-9.]*$/
export const numberWithHifenRegex = /^[0-9-]*$/
export const twoDigitsAfterDecimal = /^(\d+(\.\d{0,2})?)?$/
export const locationRegex = /^\d*\.?\d*$/
export const ibanRegex = /^PK\d{2}[A-Z]{4}[0-9A-Z]{16}$/