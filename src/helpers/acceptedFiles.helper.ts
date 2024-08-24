type FileTypeMap = {
  [category: string]: {
    [mimeType: string]: string[];
  };
};

const fileTypeMap: FileTypeMap = {
  all: {
    //IMAGES
    "image/png": [".png"],
    "image/svg+xml": [".svg"],
    "image/webp": [".webp"],
    "image/jpeg": [".jpeg", ".jpg"],
    "image/gif": [".gif"],
    "image/ico": [".ico", ".icon"],
    "image/bmp": [".bmp"],
    "image/tiff": [".tiff", ".tif"],
    "image/vnd.microsoft.icon": [".ico"],
    "image/x-icon": [".ico"],

    //FILES

    "text/html": [".html", ".htm"],
    "text/css": [".css"],
    "text/plain": [".txt"],
    "text/csv": [".csv"],
    "application/pdf": [".pdf"],
    "application/msword": [".doc", ".docx"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      ".docx",
    ],
    "application/x-rar-compressed": [".rar"],
    "application/vnd.ms-excel": [".xls", ".xlsx"],
    "application/vnd.ms-powerpoint": [".ppt", ".pptx"],

    //VIDEOS
    "video/mp4": [".mp4"],
    "video/webm": [".webm"],
    "video/ogg": [".ogg"],
    "video/avi": [".avi"],
    "video/mpeg": [".mpeg", ".mpg"],
    "video/quicktime": [".mov"],
    "video/x-msvideo": [".avi"],
    "video/x-flv": [".flv"],
    "video/x-matroska": [".mkv"],
    "video/x-ms-wmv": [".wmv"],
    "video/3gpp": [".3gp"],
  },
  images: {
    "image/png": [".png"],
    "image/svg+xml": [".svg"],
    "image/webp": [".webp"],
    "image/jpeg": [".jpeg", ".jpg"],
    "image/gif": [".gif"],
    "image/ico": [".ico", ".icon"],
    "image/bmp": [".bmp"],
    "image/tiff": [".tiff", ".tif"],
    "image/vnd.microsoft.icon": [".ico"],
    "image/x-icon": [".ico"],
  },
  files: {
    "text/html": [".html", ".htm"],
    "text/css": [".css"],
    "text/plain": [".txt"],
    "text/csv": [".csv"],
    "application/pdf": [".pdf"],
    "application/msword": [".doc", ".docx"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      ".docx",
    ],
    "application/x-rar-compressed": [".rar"],
    "application/vnd.ms-excel": [".xls", ".xlsx"],
    "application/vnd.ms-powerpoint": [".ppt", ".pptx"],
  },
  videos: {
    "video/mp4": [".mp4"],
    "video/webm": [".webm"],
    "video/ogg": [".ogg"],
    "video/avi": [".avi"],
    "video/mpeg": [".mpeg", ".mpg"],
    "video/quicktime": [".mov"],
    "video/x-msvideo": [".avi"],
    "video/x-flv": [".flv"],
    "video/x-matroska": [".mkv"],
    "video/x-ms-wmv": [".wmv"],
    "video/3gpp": [".3gp"],
  },
  customImages: {
    "image/png": [".png"],
    "image/svg+xml": [".svg"],
    "image/webp": [".webp"],
    "image/jpeg": [".jpeg", ".jpg"],
  },
  company: {
    "image/png": [".png"],
    "image/webp": [".webp"],
    "image/jpeg": [".jpeg", ".jpg"],
  },
  companyDetails: {
    "image/png": [".png"],
    "image/webp": [".webp"],
    "image/jpeg": [".jpeg", ".jpg"],
    "application/pdf": [".pdf"],
  },
  receipt: {
    "image/png": [".png"],
    "image/webp": [".webp"],
    "image/jpeg": [".jpeg", ".jpg"],
    "application/pdf": [".pdf"],
  },
};

// images files videos customImages all
export function getFileTypes(
  category: keyof FileTypeMap
): FileTypeMap[keyof FileTypeMap] {
  return fileTypeMap[category];
}
