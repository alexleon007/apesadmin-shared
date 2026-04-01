export const MODE_CREATE = "create";
export const MODE_NEW = "new";
export const MODE_EDIT = "edit";
export const MODE_VIEW = "view";
export const MODE_MAXMIN = "maxmin";
export const MODE_DELETE = "delete";
export const MODE_NEXT = "next";
export const MODE_STAMP = "stamp";
export const MODE_RETURN = "return";
export const MODE_IMPORT = "import";
export const MODE_MANUAL = "manual";
export const MODE_MANAGE_SUBSCRIPTION = "manageSubscription";
export const MODE_PAY_SUBSCRIPTION = "paySubscription";

export const STATUS_REJECTED = "rejected";
export const STATUS_CANCELLED = "cancelled";
export const STATUS_DELETED = "deleted";
export const STATUS_UNACTIVE = "unactive";
export const STATUS_ACTIVE = "active";
export const STATUS_IN_PROGRESS = "in_progress";
export const STATUS_AUTHORIZED = "authorized";
export const STATUS_FINISHED = "finished";
export const STATUS_PAID = "paid";
export const STATUS_RESERVED = "reserved";

export const STATUS_NUMBER_REJECTED = -3;
export const STATUS_NUMBER_CANCELLED = -2;
export const STATUS_NUMBER_DELETED = -1;
export const STATUS_NUMBER_UNACTIVE = 0;
export const STATUS_NUMBER_ACTIVE = 1;
export const STATUS_NUMBER_IN_PROGRESS = 2;
export const STATUS_NUMBER_AUTHORIZED = 3;
export const STATUS_NUMBER_FINISHED = 4;
export const STATUS_NUMBER_PAID = 5;
export const STATUS_NUMBER_RESERVED = 6;

export const RECORD_BIT = "bit";
export const RECORD_DOC = "doc";
export const RECORD_RECORD = "record";
export const RECORD_RECORDS = "records";
export const RECORD_FOLDERS = "folders";

export const OS_ANDROID = "android";
export const OS_IOS = "ios";

export const SIZE_FULLSCREN = "fullscreen";

export const FILETYPE_PDF = "pdf";
export const FILETYPE_IMAGE = "image";
export const FILETYPE_OTHER = "other";

export const TYPE_ORDERS = "orders";
export const TYPE_PROJECTS = "projects";
export const TYPE_POS = "pos";
export const TYPE_PO = "po";
export const TYPE_PARTY = "party";
export const TYPE_AI = "AI";

export const VAR_TYPE_STRING = "string";
export const VAR_TYPE_BOOLEAN = "boolean";
export const VAR_TYPE_NUMBER = "number";
export const VAR_TYPE_OBJECT = "object";
export const VAR_TYPE_EMPTY_STRING = "";

export const FORM_MAIN = "main";
export const FORM_ADDRESSES = "addresses";
export const FORM_CONTACTS = "contacts";
export const FORM_PIPELINE = "pipelines";
export const FORM_RECORDS = "records";
export const FORM_FISCAL = "fiscal";
export const FORM_STATS = "stats";
export const FORM_OTHER = "other";

export const MAILSUPPLIER_GMAIL = "gmail";
export const MAILSUPPLIER_OUTLOOK = "outlook";
export const MAILSUPPLIER_OTHER = "other";

export const CONCEPT_MAIN = "main";
export const CONCEPT_FORM = "form";
export const CONCEPT_PRODUCTS = "product";

export const VIEW_BOARD = "board";
export const VIEW_GALLERY = "gallery";
export const VIEW_TABLE = "table";

export const ROLE_LABELS: Record<string, string> = {
  admin: "Admin",
  team: "Equipo",
  agent: "Agente",
};

export const ROLE_CUSTOMER = "customer";
export const ROLE_SUPPLIER = "supplier";
export const ROLE_RH = "rh";
export const ROLE_CONTACT = "contact";

export const ROLE_MAP: Record<string, { singular: string; plural: string }> = {
  suppliers: { singular: "Proveedor", plural: "Proveedores" },
  supplier: { singular: "Proveedor", plural: "Proveedores" },
  prospect: { singular: "Prospecto", plural: "Prospectos" },
  prospects: { singular: "Prospecto", plural: "Prospectos" },
  customer: { singular: "Cliente", plural: "Clientes" },
  customers: { singular: "Cliente", plural: "Clientes" },
  rh: { singular: "Colaborador", plural: "Colaboradores" },
  rhes: { singular: "Colaborador", plural: "Colaboradores" },
  contact: { singular: "Contacto", plural: "Contactos" },
  contacts: { singular: "Contacto", plural: "Contactos" },
};

export const MIME_MAP: Record<string, string> = {
  // Documentos
  "application/pdf": "PDF",
  "text/plain": "Texto",
  "application/msword": "Word (doc)",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "Word (docx)",
  "application/vnd.ms-excel": "Excel (xls)",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
    "Excel (xlsx)",
  "application/vnd.ms-powerpoint": "PowerPoint (ppt)",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    "PowerPoint (pptx)",
  "application/rtf": "RTF",
  "application/vnd.oasis.opendocument.text": "ODT",
  "application/vnd.oasis.opendocument.spreadsheet": "ODS",
  "application/vnd.oasis.opendocument.presentation": "ODP",

  // Imágenes
  "image/png": "Imagen PNG",
  "image/jpeg": "Imagen JPEG",
  "image/jpg": "Imagen JPG",
  "image/gif": "GIF",
  "image/webp": "WebP",
  "image/svg+xml": "SVG",
  "image/bmp": "BMP",
  "image/tiff": "TIFF",
  "image/x-icon": "Icono (ICO)",

  // Audio
  "audio/mpeg": "MP3",
  "audio/wav": "WAV",
  "audio/ogg": "OGG",
  "audio/mp4": "Audio MP4",
  "audio/aac": "AAC",
  "audio/webm": "WebM Audio",

  // Video
  "video/mp4": "Video MP4",
  "video/mpeg": "Video MPEG",
  "video/ogg": "Video OGG",
  "video/webm": "Video WebM",
  "video/x-msvideo": "AVI",
  "video/quicktime": "MOV",
  "video/x-ms-wmv": "WMV",
  "video/x-flv": "FLV",

  // Archivos comprimidos
  "application/zip": "ZIP",
  "application/x-rar-compressed": "RAR",
  "application/x-7z-compressed": "7Z",
  "application/x-tar": "TAR",
  "application/gzip": "GZIP",
  "application/x-bzip2": "BZIP2",
  "application/x-apple-diskimage": "DMG",

  // Otros
  "application/json": "JSON",
  "application/xml": "XML",
  "application/javascript": "JavaScript",
  "text/html": "HTML",
  "text/css": "CSS",
  "text/csv": "CSV",
  "application/octet-stream": "Binario",
  "application/vnd.android.package-archive": "APK",
  "application/x-sh": "Script Shell",
  "application/x-python-code": "Python",
  "application/java-archive": "Java JAR",
  "application/pdf; charset=utf-8": "PDF UTF-8",
  "font/woff": "Fuente WOFF",
  "font/woff2": "Fuente WOFF2",
  "font/ttf": "Fuente TTF",
  "application/vnd.mozilla.xul+xml": "XUL",
  "application/epub+zip": "EPUB",
};

export const CALENDAR_EVENT_TYPE_REUNION = "Reunión";
export const CALENDAR_EVENT_TYPE_LLAMADA = "Llamada";
export const CALENDAR_EVENT_TYPE_DISPONIBILIDAD = "Disponibilidad";

export const CALENDAR_EVENT_TYPES = [
  CALENDAR_EVENT_TYPE_REUNION,
  CALENDAR_EVENT_TYPE_LLAMADA,
  CALENDAR_EVENT_TYPE_DISPONIBILIDAD,
];

export const TAB_BUDGET = "budget";
export const TAB_PROPERTY = "property";
export const TAB_STATS = "stats";

export const COLOR_PALETTE_NAMES: Record<string, string> = {
  graphColors: "Gráficas",
  systemStates: "Estados del sistema",
  vibrantSunset: "Atardecer vibrante",
  mysticForest: "Bosque místico",
  neonGalaxy: "Galaxia neón",
  earthClay: "Arcilla terrestre",
  auroraLights: "Luces de aurora",
  candySweet: "Dulce caramelo",
  freshCitrus: "Cítricos frescos",
  neutralManagement: "Neutros",
  humanResources: "Recursos humanos",
  allDifferent: "Colores diferentes",
  allDifferentPastel: "Pasteles diferentes",
};

export const CFDI_USES = [
  { code: "G01", name: "Adquisición de mercancías" },
  { code: "G02", name: "Devoluciones, descuentos o bonificaciones" },
  { code: "G03", name: "Gastos en general" },
  { code: "I01", name: "Construcciones" },
  { code: "I02", name: "Mobilario y equipo de oficina por inversiones" },
  { code: "I03", name: "Equipo de transporte" },
  { code: "I04", name: "Equipo de cómputo y accesorios" },
  { code: "I05", name: "Dados, troqueles, moldes, matrices y herramental" },
  { code: "I06", name: "Comunicaciones telefónicas" },
  { code: "I07", name: "Comunicaciones satelitales" },
  { code: "I08", name: "Otra maquinaria y equipo" },
  { code: "D01", name: "Honorarios médicos, dentales y gastos hospitalarios" },
  { code: "D02", name: "Gastos médicos por incapacidad o discapacidad" },
  { code: "D03", name: "Gastos funerales" },
  { code: "D04", name: "Donativos" },
  {
    code: "D05",
    name: "Intereses reales efectivamente pagados por créditos hipotecarios",
  },
  { code: "D06", name: "Aportaciones voluntarias al SAR" },
  { code: "D07", name: "Primas por seguros de gastos médicos" },
  { code: "D08", name: "Gastos de transportación escolar obligatoria" },
  {
    code: "D09",
    name: "Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones",
  },
  { code: "D10", name: "Pagos por servicios educativos (colegiaturas)" },
  { code: "S01", name: "Sin efectos fiscales" },
];

export const GRID_SIZE = 10;

export const DASHBOARD_CATEGORIES = ["Todos", "General", "Reportes"];
