"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPE_AI = exports.TYPE_PARTY = exports.TYPE_PO = exports.TYPE_POS = exports.TYPE_PROJECTS = exports.TYPE_ORDERS = exports.FILETYPE_OTHER = exports.FILETYPE_IMAGE = exports.FILETYPE_PDF = exports.SIZE_FULLSCREN = exports.OS_IOS = exports.OS_ANDROID = exports.RECORD_FOLDERS = exports.RECORD_RECORDS = exports.RECORD_RECORD = exports.RECORD_DOC = exports.RECORD_BIT = exports.STATUS_NUMBER_RESERVED = exports.STATUS_NUMBER_PAID = exports.STATUS_NUMBER_FINISHED = exports.STATUS_NUMBER_AUTHORIZED = exports.STATUS_NUMBER_IN_PROGRESS = exports.STATUS_NUMBER_ACTIVE = exports.STATUS_NUMBER_UNACTIVE = exports.STATUS_NUMBER_DELETED = exports.STATUS_NUMBER_CANCELLED = exports.STATUS_NUMBER_REJECTED = exports.STATUS_RESERVED = exports.STATUS_PAID = exports.STATUS_FINISHED = exports.STATUS_AUTHORIZED = exports.STATUS_IN_PROGRESS = exports.STATUS_ACTIVE = exports.STATUS_UNACTIVE = exports.STATUS_DELETED = exports.STATUS_CANCELLED = exports.STATUS_REJECTED = exports.MODE_PAY_SUBSCRIPTION = exports.MODE_MANAGE_SUBSCRIPTION = exports.MODE_MANUAL = exports.MODE_IMPORT = exports.MODE_RETURN = exports.MODE_STAMP = exports.MODE_NEXT = exports.MODE_DELETE = exports.MODE_MAXMIN = exports.MODE_VIEW = exports.MODE_EDIT = exports.MODE_NEW = exports.MODE_CREATE = void 0;
exports.CFDI_USES = exports.COLOR_PALETTE_NAMES = exports.TAB_STATS = exports.TAB_PROPERTY = exports.TAB_BUDGET = exports.CALENDAR_EVENT_TYPES = exports.CALENDAR_EVENT_TYPE_DISPONIBILIDAD = exports.CALENDAR_EVENT_TYPE_LLAMADA = exports.CALENDAR_EVENT_TYPE_REUNION = exports.MIME_MAP = exports.ROLE_MAP = exports.ROLE_CONTACT = exports.ROLE_RH = exports.ROLE_SUPPLIER = exports.ROLE_CUSTOMER = exports.ROLE_LABELS = exports.VIEW_TABLE = exports.VIEW_GALLERY = exports.VIEW_BOARD = exports.CONCEPT_PRODUCTS = exports.CONCEPT_FORM = exports.CONCEPT_MAIN = exports.MAILSUPPLIER_OTHER = exports.MAILSUPPLIER_OUTLOOK = exports.MAILSUPPLIER_GMAIL = exports.FORM_OTHER = exports.FORM_STATS = exports.FORM_FISCAL = exports.FORM_RECORDS = exports.FORM_PIPELINE = exports.FORM_CONTACTS = exports.FORM_ADDRESSES = exports.FORM_MAIN = exports.VAR_TYPE_EMPTY_STRING = exports.VAR_TYPE_OBJECT = exports.VAR_TYPE_NUMBER = exports.VAR_TYPE_BOOLEAN = exports.VAR_TYPE_STRING = void 0;
exports.MODE_CREATE = "create";
exports.MODE_NEW = "new";
exports.MODE_EDIT = "edit";
exports.MODE_VIEW = "view";
exports.MODE_MAXMIN = "maxmin";
exports.MODE_DELETE = "delete";
exports.MODE_NEXT = "next";
exports.MODE_STAMP = "stamp";
exports.MODE_RETURN = "return";
exports.MODE_IMPORT = "import";
exports.MODE_MANUAL = "manual";
exports.MODE_MANAGE_SUBSCRIPTION = "manageSubscription";
exports.MODE_PAY_SUBSCRIPTION = "paySubscription";
exports.STATUS_REJECTED = "rejected";
exports.STATUS_CANCELLED = "cancelled";
exports.STATUS_DELETED = "deleted";
exports.STATUS_UNACTIVE = "unactive";
exports.STATUS_ACTIVE = "active";
exports.STATUS_IN_PROGRESS = "in_progress";
exports.STATUS_AUTHORIZED = "authorized";
exports.STATUS_FINISHED = "finished";
exports.STATUS_PAID = "paid";
exports.STATUS_RESERVED = "reserved";
exports.STATUS_NUMBER_REJECTED = -3;
exports.STATUS_NUMBER_CANCELLED = -2;
exports.STATUS_NUMBER_DELETED = -1;
exports.STATUS_NUMBER_UNACTIVE = 0;
exports.STATUS_NUMBER_ACTIVE = 1;
exports.STATUS_NUMBER_IN_PROGRESS = 2;
exports.STATUS_NUMBER_AUTHORIZED = 3;
exports.STATUS_NUMBER_FINISHED = 4;
exports.STATUS_NUMBER_PAID = 5;
exports.STATUS_NUMBER_RESERVED = 6;
exports.RECORD_BIT = "bit";
exports.RECORD_DOC = "doc";
exports.RECORD_RECORD = "record";
exports.RECORD_RECORDS = "records";
exports.RECORD_FOLDERS = "folders";
exports.OS_ANDROID = "android";
exports.OS_IOS = "ios";
exports.SIZE_FULLSCREN = "fullscreen";
exports.FILETYPE_PDF = "pdf";
exports.FILETYPE_IMAGE = "image";
exports.FILETYPE_OTHER = "other";
exports.TYPE_ORDERS = "orders";
exports.TYPE_PROJECTS = "projects";
exports.TYPE_POS = "pos";
exports.TYPE_PO = "po";
exports.TYPE_PARTY = "party";
exports.TYPE_AI = "AI";
exports.VAR_TYPE_STRING = "string";
exports.VAR_TYPE_BOOLEAN = "boolean";
exports.VAR_TYPE_NUMBER = "number";
exports.VAR_TYPE_OBJECT = "object";
exports.VAR_TYPE_EMPTY_STRING = "";
exports.FORM_MAIN = "main";
exports.FORM_ADDRESSES = "addresses";
exports.FORM_CONTACTS = "contacts";
exports.FORM_PIPELINE = "pipelines";
exports.FORM_RECORDS = "records";
exports.FORM_FISCAL = "fiscal";
exports.FORM_STATS = "stats";
exports.FORM_OTHER = "other";
exports.MAILSUPPLIER_GMAIL = "gmail";
exports.MAILSUPPLIER_OUTLOOK = "outlook";
exports.MAILSUPPLIER_OTHER = "other";
exports.CONCEPT_MAIN = "main";
exports.CONCEPT_FORM = "form";
exports.CONCEPT_PRODUCTS = "product";
exports.VIEW_BOARD = "board";
exports.VIEW_GALLERY = "gallery";
exports.VIEW_TABLE = "table";
exports.ROLE_LABELS = {
    admin: "Admin",
    team: "Equipo",
    agent: "Agente",
};
exports.ROLE_CUSTOMER = "customer";
exports.ROLE_SUPPLIER = "supplier";
exports.ROLE_RH = "rh";
exports.ROLE_CONTACT = "contact";
exports.ROLE_MAP = {
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
exports.MIME_MAP = {
    // Documentos
    "application/pdf": "PDF",
    "text/plain": "Texto",
    "application/msword": "Word (doc)",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Word (docx)",
    "application/vnd.ms-excel": "Excel (xls)",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "Excel (xlsx)",
    "application/vnd.ms-powerpoint": "PowerPoint (ppt)",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": "PowerPoint (pptx)",
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
exports.CALENDAR_EVENT_TYPE_REUNION = "Reunión";
exports.CALENDAR_EVENT_TYPE_LLAMADA = "Llamada";
exports.CALENDAR_EVENT_TYPE_DISPONIBILIDAD = "Disponibilidad";
exports.CALENDAR_EVENT_TYPES = [
    exports.CALENDAR_EVENT_TYPE_REUNION,
    exports.CALENDAR_EVENT_TYPE_LLAMADA,
    exports.CALENDAR_EVENT_TYPE_DISPONIBILIDAD,
];
exports.TAB_BUDGET = "budget";
exports.TAB_PROPERTY = "property";
exports.TAB_STATS = "stats";
exports.COLOR_PALETTE_NAMES = {
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
exports.CFDI_USES = [
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
//# sourceMappingURL=consts.js.map