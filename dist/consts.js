"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RECURRENCE_BIWEEKLY = exports.RECURRENCE_WEEKLY = exports.RECURRENCE_DAILY = exports.TYPE_RECURRENCES = exports.TYPE_ORDERS = exports.FILETYPE_OTHER = exports.FILETYPE_IMAGE = exports.FILETYPE_PDF = exports.SIZE_FULLSCREN = exports.OS_IOS = exports.OS_ANDROID = exports.RECORD_FOLDERS = exports.RECORD_RECORDS = exports.RECORD_BITACORA = exports.RECORD_RECORD = exports.RECORD_DOC = exports.RECORD_BIT = exports.STATUS_NUMBER_RESERVED = exports.STATUS_NUMBER_PAID = exports.STATUS_NUMBER_FINISHED = exports.STATUS_NUMBER_AUTHORIZED = exports.STATUS_NUMBER_IN_PROGRESS = exports.STATUS_NUMBER_ACTIVE = exports.STATUS_NUMBER_UNACTIVE = exports.STATUS_NUMBER_DELETED = exports.STATUS_NUMBER_CANCELLED = exports.STATUS_NUMBER_REJECTED = exports.STATUS_RESERVED = exports.STATUS_PAID = exports.STATUS_FINISHED = exports.STATUS_AUTHORIZED = exports.STATUS_IN_PROGRESS = exports.STATUS_ACTIVE = exports.STATUS_UNACTIVE = exports.STATUS_DELETED = exports.STATUS_CANCELLED = exports.STATUS_REJECTED = exports.MODE_PAY_SUBSCRIPTION = exports.MODE_MANAGE_SUBSCRIPTION = exports.MODE_MANUAL = exports.MODE_IMPORT = exports.MODE_RETURN = exports.MODE_STAMP = exports.MODE_NEXT = exports.MODE_DELETE = exports.MODE_MAXMIN = exports.MODE_VIEW = exports.MODE_EDIT = exports.MODE_NEW = exports.MODE_CREATE = void 0;
exports.CONCEPT_PRODUCTS = exports.CONCEPT_FORM = exports.CONCEPT_MAIN = exports.MAILFOLDER_ARCHIVE = exports.MAILFOLDER_SPAM = exports.MAILFOLDER_TRASH = exports.MAILFOLDER_DRAFTS = exports.MAILFOLDER_SENT = exports.MAILFOLDER_INBOX = exports.MAILMENU_IDMM2 = exports.MAILMENU_IDMM = exports.MAILSECURITY_NONE = exports.MAILSECURITY_STARTTLS = exports.MAILSECURITY_SSL = exports.MAILSUPPLIER_OTHER = exports.MAILSUPPLIER_OUTLOOK = exports.MAILSUPPLIER_GMAIL = exports.FORM_ATTENDANCE = exports.FORM_OTHER = exports.FORM_STATS = exports.FORM_FISCAL = exports.FORM_RECORDS = exports.FORM_PIPELINE = exports.FORM_CONTACTS = exports.FORM_ADDRESSES = exports.FORM_MAIN = exports.VAR_TYPE_EMPTY_STRING = exports.VAR_TYPE_OBJECT = exports.VAR_TYPE_NUMBER = exports.VAR_TYPE_BOOLEAN = exports.VAR_TYPE_STRING = exports.TYPE_AI = exports.TYPE_PARTY = exports.TYPE_PO = exports.TYPE_POS = exports.TYPE_PROJECTS = exports.ORDER_TYPE_LABELS = exports.CFDI_GLOBAL_MONTH_OPTIONS = exports.CFDI_GLOBAL_PERIODICITY_OPTIONS = exports.CFDI_GLOBAL_PAYMETHOD = exports.CFDI_GLOBAL_TAX_REGIME = exports.CFDI_GLOBAL_CFDIUSE = exports.CFDI_GLOBAL_RFC = exports.RECURRENCE_FREQUENCY_LABELS = exports.RECURRENCE_FREQUENCY_OPTIONS = exports.RECURRENCE_ANNUAL = exports.RECURRENCE_SEMIANNUAL = exports.RECURRENCE_QUARTERLY = exports.RECURRENCE_BIMONTHLY = exports.RECURRENCE_MONTHLY = void 0;
exports.ATTENDANCE_CALENDAR_TYPEDOC_PREFIX = exports.ATTENDANCE_INCIDENCE_COLORS = exports.ATTENDANCE_INCIDENCE_LABEL_KEYS = exports.ATTENDANCE_INCIDENCE_ORIGIN_MANUAL = exports.ATTENDANCE_INCIDENCE_ORIGIN_AUTO = exports.ATTENDANCE_INCIDENCE_MANUAL_TYPES = exports.ATTENDANCE_INCIDENCE_TYPES = exports.ATTENDANCE_INCIDENCE_UNJUSTIFIEDABSENCE = exports.ATTENDANCE_INCIDENCE_JUSTIFIEDABSENCE = exports.ATTENDANCE_INCIDENCE_DISABILITY = exports.ATTENDANCE_INCIDENCE_VACATION = exports.ATTENDANCE_INCIDENCE_PERMISSION = exports.ATTENDANCE_INCIDENCE_EXCESSBREAK = exports.ATTENDANCE_INCIDENCE_MISSINGPUNCH = exports.ATTENDANCE_INCIDENCE_EARLYLEAVE = exports.ATTENDANCE_INCIDENCE_ABSENT = exports.ATTENDANCE_INCIDENCE_LATE = exports.ATTENDANCE_INCIDENCE_ONTIME = exports.ATTENDANCE_SOURCE_IMPORT = exports.ATTENDANCE_SOURCE_MANUAL = exports.ATTENDANCE_SOURCE_WIDGET = exports.ATTENDANCE_RECORD_TYPE_LABEL_KEYS = exports.CLOCK_TYPE_TO_STATUS = exports.VALID_CLOCK_TYPES = exports.DASHBOARD_CATEGORIES = exports.GRID_SIZE = exports.CFDI_USES = exports.COLOR_PALETTE_NAMES = exports.TAB_STATS = exports.TAB_PROPERTY = exports.TAB_BUDGET = exports.CALENDAR_EVENT_TYPES = exports.CALENDAR_EVENT_TYPE_DISPONIBILIDAD = exports.CALENDAR_EVENT_TYPE_LLAMADA = exports.CALENDAR_EVENT_TYPE_REUNION = exports.MIME_MAP = exports.ROLE_MAP = exports.ROLE_CONTACT = exports.ROLE_RH = exports.ROLE_SUPPLIER = exports.ROLE_CUSTOMER = exports.COMISSION_TYPE_SOLD = exports.COMISSION_TYPE_PAYED = exports.USERPARTY_AI = exports.USERPARTY_EXTERNAL = exports.USERPARTY_INTERNAL = exports.ROLE_LABELS = exports.VIEW_TABLE = exports.VIEW_GALLERY = exports.VIEW_BOARD = void 0;
exports.PROFILE_ACCOUNTTYPE_INVENTORY_LOSS = exports.PROFILE_ACCOUNTTYPE_INVENTORY_GAIN = exports.PROFILE_ACCOUNTTYPE_SALES_DISCOUNT = exports.PROFILE_ACCOUNTTYPE_SALES_RETURN = exports.PROFILE_ACCOUNTTYPE_COST_OF_SALES = exports.PROFILE_ACCOUNTTYPE_INVENTORY_ASSET = exports.PROFILE_ACCOUNTTYPE_SALES_REVENUE = exports.ACCOUNTPROFILE_TYPE_LABEL_KEYS = exports.ACCOUNTPROFILE_TYPE_OPTIONS = exports.ACCOUNTPROFILE_TYPE_EXPENSE = exports.ACCOUNTPROFILE_TYPE_PRODUCT = exports.ACCOUNTING_ENTRY_STATUS_LABEL_KEYS = exports.ACCOUNTING_ENTRY_STATUS_CANCELLED = exports.ACCOUNTING_ENTRY_STATUS_POSTED = exports.ACCOUNTING_ENTRY_STATUS_DRAFT = exports.ACCOUNTING_ENTRY_TYPE_LABEL_KEYS = exports.ACCOUNTING_ENTRY_TYPE_OPTIONS = exports.STMT_GROUP_LABEL_KEYS = exports.STMT_GROUP_OPTIONS = exports.STMT_GROUP_INCOME_TAX = exports.STMT_GROUP_FINANCIAL_EXPENSE = exports.STMT_GROUP_FINANCIAL_INCOME = exports.STMT_GROUP_OTHER_EXPENSE = exports.STMT_GROUP_OTHER_INCOME = exports.STMT_GROUP_OPERATING_EXPENSE = exports.STMT_GROUP_COST_OF_SALES = exports.STMT_GROUP_REVENUE = exports.ACCOUNTINGCLOSINGMENU_IDMM2 = exports.ACCOUNTINGREPORTSMENU_IDMM2 = exports.ACCOUNTINGENTRIESMENU_IDMM2 = exports.ACCOUNTINGMENU_IDMM2 = exports.ACCOUNTINGMENU_IDMM = exports.ACCOUNT_NATURE_LABEL_KEYS = exports.ACCOUNT_NATURE_OPTIONS = exports.ACCOUNT_NATURE_CREDIT = exports.ACCOUNT_NATURE_DEBIT = exports.ACCOUNT_TYPE_LABEL_KEYS = exports.ACCOUNT_TYPE_OPTIONS = exports.ACCOUNT_TYPE_MEMO = exports.ACCOUNT_TYPE_EXPENSE = exports.ACCOUNT_TYPE_COST = exports.ACCOUNT_TYPE_REVENUE = exports.ACCOUNT_TYPE_EQUITY = exports.ACCOUNT_TYPE_LIABILITY = exports.ACCOUNT_TYPE_ASSET = exports.ATTENDANCE_IMPORT_ROW_UNMATCHED = exports.ATTENDANCE_IMPORT_ROW_ERROR = exports.ATTENDANCE_IMPORT_ROW_DUPLICATE = exports.ATTENDANCE_IMPORT_ROW_OK = exports.attendanceCalendarTypedoc = void 0;
exports.BANKACCOUNT_ACCOUNTTYPE_CASH_ACCOUNT = exports.ACCOUNTING_ENTITYTYPE_BANK_ACCOUNT = exports.PRODUCT_ACCOUNTTYPES_SERVICE = exports.PRODUCT_ACCOUNTTYPES_INVENTORIED = exports.ACCOUNTING_ENTITYTYPE_PRODUCT = exports.TAX_ACCOUNTTYPES_DEFAULT = exports.TAX_ACCOUNTTYPES_BY_CLAS = exports.TAX_ACCOUNTTYPE_LABEL_KEYS = exports.TAX_ACCOUNTTYPE_WITHHOLDING_PAYABLE = exports.TAX_ACCOUNTTYPE_WITHHOLDING_RECEIVABLE = exports.TAX_ACCOUNTTYPE_INPUT = exports.TAX_ACCOUNTTYPE_OUTPUT = exports.TAX_CLAS_RETENTION = exports.ACCOUNTING_ENTITYTYPE_TAX = exports.GENERAL_ACCOUNTTYPE_LABEL_KEYS = exports.GENERAL_ACCOUNTTYPE_OPTIONS = exports.GENERAL_ACCOUNTTYPE_RETAINED_EARNINGS = exports.GENERAL_ACCOUNTTYPE_ROUNDING = exports.GENERAL_ACCOUNTTYPE_BANK_DEFAULT = exports.GENERAL_ACCOUNTTYPE_COST_OF_SALES = exports.GENERAL_ACCOUNTTYPE_INVENTORY_ASSET = exports.GENERAL_ACCOUNTTYPE_PURCHASE_EXPENSE = exports.GENERAL_ACCOUNTTYPE_SALES_RETURN = exports.GENERAL_ACCOUNTTYPE_SALES_DISCOUNT = exports.GENERAL_ACCOUNTTYPE_SALES_REVENUE = exports.GENERAL_ACCOUNTTYPE_EXCHANGE_LOSS = exports.GENERAL_ACCOUNTTYPE_EXCHANGE_GAIN = exports.GENERAL_ACCOUNTTYPE_SUPPLIER_ADVANCES = exports.GENERAL_ACCOUNTTYPE_CUSTOMER_ADVANCES = exports.GENERAL_ACCOUNTTYPE_SUPPLIERS_PAYABLE = exports.GENERAL_ACCOUNTTYPE_CUSTOMERS_RECEIVABLE = exports.ACCOUNTING_ENTITYTYPE_COMPANY = exports.PROFILE_ACCOUNTTYPES_BY_PROFILETYPE = exports.PROFILE_ACCOUNTTYPE_LABEL_KEYS = exports.PROFILE_ACCOUNTTYPE_PURCHASE_EXPENSE = void 0;
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
exports.RECORD_BITACORA = "bitacora";
exports.RECORD_RECORDS = "records";
exports.RECORD_FOLDERS = "folders";
exports.OS_ANDROID = "android";
exports.OS_IOS = "ios";
exports.SIZE_FULLSCREN = "fullscreen";
exports.FILETYPE_PDF = "pdf";
exports.FILETYPE_IMAGE = "image";
exports.FILETYPE_OTHER = "other";
exports.TYPE_ORDERS = "orders";
exports.TYPE_RECURRENCES = "recurrences";
exports.RECURRENCE_DAILY = "daily";
exports.RECURRENCE_WEEKLY = "weekly";
exports.RECURRENCE_BIWEEKLY = "biweekly";
exports.RECURRENCE_MONTHLY = "monthly";
exports.RECURRENCE_BIMONTHLY = "bimonthly";
exports.RECURRENCE_QUARTERLY = "quarterly";
exports.RECURRENCE_SEMIANNUAL = "semiannual";
exports.RECURRENCE_ANNUAL = "annual";
exports.RECURRENCE_FREQUENCY_OPTIONS = [
    { value: exports.RECURRENCE_ANNUAL, label: "Anual" },
    { value: exports.RECURRENCE_SEMIANNUAL, label: "Semestral" },
    { value: exports.RECURRENCE_QUARTERLY, label: "Trimestral" },
    { value: exports.RECURRENCE_BIMONTHLY, label: "Bimestral" },
    { value: exports.RECURRENCE_MONTHLY, label: "Mensual" },
    { value: exports.RECURRENCE_BIWEEKLY, label: "Quincenal" },
    { value: exports.RECURRENCE_WEEKLY, label: "Semanal" },
    { value: exports.RECURRENCE_DAILY, label: "Diario" },
];
exports.RECURRENCE_FREQUENCY_LABELS = exports.RECURRENCE_FREQUENCY_OPTIONS.reduce((acc, opt) => {
    acc[opt.value] = opt.label;
    return acc;
}, {});
// CFDI 4.0 factura global (público en general): catálogos c_Periodicidad y
// c_Meses del SAT, más los valores fijos que el nodo InformacionGlobal obliga
// a usar en el receptor.
exports.CFDI_GLOBAL_RFC = "XAXX010101000";
exports.CFDI_GLOBAL_CFDIUSE = "S01";
exports.CFDI_GLOBAL_TAX_REGIME = "616";
exports.CFDI_GLOBAL_PAYMETHOD = "PUE";
exports.CFDI_GLOBAL_PERIODICITY_OPTIONS = [
    { value: "01", label: "Diaria" },
    { value: "02", label: "Semanal" },
    { value: "03", label: "Quincenal" },
    { value: "04", label: "Mensual" },
    { value: "05", label: "Bimestral" },
];
// 01-12 son meses; 13-18 son bimestres y sólo aplican con periodicidad 05.
exports.CFDI_GLOBAL_MONTH_OPTIONS = [
    { value: "01", label: "Enero" },
    { value: "02", label: "Febrero" },
    { value: "03", label: "Marzo" },
    { value: "04", label: "Abril" },
    { value: "05", label: "Mayo" },
    { value: "06", label: "Junio" },
    { value: "07", label: "Julio" },
    { value: "08", label: "Agosto" },
    { value: "09", label: "Septiembre" },
    { value: "10", label: "Octubre" },
    { value: "11", label: "Noviembre" },
    { value: "12", label: "Diciembre" },
    { value: "13", label: "Enero-Febrero" },
    { value: "14", label: "Marzo-Abril" },
    { value: "15", label: "Mayo-Junio" },
    { value: "16", label: "Julio-Agosto" },
    { value: "17", label: "Septiembre-Octubre" },
    { value: "18", label: "Noviembre-Diciembre" },
];
exports.ORDER_TYPE_LABELS = {
    1: "Cotización",
    2: "Pedido",
    3: "Factura",
    4: "Ticket",
    5: "Bonificación",
    6: "Devolución",
};
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
exports.FORM_ATTENDANCE = "attendance";
exports.MAILSUPPLIER_GMAIL = "gmail";
exports.MAILSUPPLIER_OUTLOOK = "outlook";
exports.MAILSUPPLIER_OTHER = "other";
exports.MAILSECURITY_SSL = "ssl";
exports.MAILSECURITY_STARTTLS = "starttls";
exports.MAILSECURITY_NONE = "none";
exports.MAILMENU_IDMM = 6;
exports.MAILMENU_IDMM2 = 25;
exports.MAILFOLDER_INBOX = "INBOX";
exports.MAILFOLDER_SENT = "SENT";
exports.MAILFOLDER_DRAFTS = "DRAFTS";
exports.MAILFOLDER_TRASH = "TRASH";
exports.MAILFOLDER_SPAM = "SPAM";
exports.MAILFOLDER_ARCHIVE = "ARCHIVE";
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
// users.type_party: quién es el usuario, no a qué empresa pertenece.
exports.USERPARTY_INTERNAL = 1;
exports.USERPARTY_EXTERNAL = 2; // portal de clientes/proveedores
exports.USERPARTY_AI = 3; // agentes automatizados
// comissions.type_com: sobre qué evento del producto se calcula la comisión.
exports.COMISSION_TYPE_PAYED = "payedbyproduct";
exports.COMISSION_TYPE_SOLD = "soldbyproduct";
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
exports.GRID_SIZE = 10;
exports.DASHBOARD_CATEGORIES = ["all", "general", "reports"];
exports.VALID_CLOCK_TYPES = [
    "in",
    "break_start",
    "break_end",
    "out",
];
exports.CLOCK_TYPE_TO_STATUS = {
    in: "working",
    break_start: "onBreak",
    break_end: "working",
    out: "idle",
};
// Llave de traducción (no el texto) para cada type_assist — reutiliza los
// mismos labels que ya usan los botones del reloj checador (AttendanceTracker).
exports.ATTENDANCE_RECORD_TYPE_LABEL_KEYS = {
    in: "arrival",
    break_start: "break",
    break_end: "finishBreak",
    out: "exit",
};
// source_assist: de dónde salió la checada.
exports.ATTENDANCE_SOURCE_WIDGET = "widget";
exports.ATTENDANCE_SOURCE_MANUAL = "manual";
exports.ATTENDANCE_SOURCE_IMPORT = "import";
// type_inc — capa de incidencias (attendance_incidences). Las primeras tres
// (ontime/late/absent) y earlyleave/missingpunch/excessbreak las genera el
// motor de políticas a partir de las checadas; el resto RH las captura a mano.
exports.ATTENDANCE_INCIDENCE_ONTIME = "ontime";
exports.ATTENDANCE_INCIDENCE_LATE = "late";
exports.ATTENDANCE_INCIDENCE_ABSENT = "absent";
exports.ATTENDANCE_INCIDENCE_EARLYLEAVE = "earlyleave";
exports.ATTENDANCE_INCIDENCE_MISSINGPUNCH = "missingpunch";
exports.ATTENDANCE_INCIDENCE_EXCESSBREAK = "excessbreak";
exports.ATTENDANCE_INCIDENCE_PERMISSION = "permission";
exports.ATTENDANCE_INCIDENCE_VACATION = "vacation";
exports.ATTENDANCE_INCIDENCE_DISABILITY = "disability";
exports.ATTENDANCE_INCIDENCE_JUSTIFIEDABSENCE = "justifiedabsence";
exports.ATTENDANCE_INCIDENCE_UNJUSTIFIEDABSENCE = "unjustifiedabsence";
exports.ATTENDANCE_INCIDENCE_TYPES = [
    exports.ATTENDANCE_INCIDENCE_ONTIME,
    exports.ATTENDANCE_INCIDENCE_LATE,
    exports.ATTENDANCE_INCIDENCE_ABSENT,
    exports.ATTENDANCE_INCIDENCE_EARLYLEAVE,
    exports.ATTENDANCE_INCIDENCE_MISSINGPUNCH,
    exports.ATTENDANCE_INCIDENCE_EXCESSBREAK,
    exports.ATTENDANCE_INCIDENCE_PERMISSION,
    exports.ATTENDANCE_INCIDENCE_VACATION,
    exports.ATTENDANCE_INCIDENCE_DISABILITY,
    exports.ATTENDANCE_INCIDENCE_JUSTIFIEDABSENCE,
    exports.ATTENDANCE_INCIDENCE_UNJUSTIFIEDABSENCE,
];
// Las que RH captura/edita a mano; las demás solo las escribe el motor.
exports.ATTENDANCE_INCIDENCE_MANUAL_TYPES = [
    exports.ATTENDANCE_INCIDENCE_PERMISSION,
    exports.ATTENDANCE_INCIDENCE_VACATION,
    exports.ATTENDANCE_INCIDENCE_DISABILITY,
    exports.ATTENDANCE_INCIDENCE_JUSTIFIEDABSENCE,
    exports.ATTENDANCE_INCIDENCE_UNJUSTIFIEDABSENCE,
];
exports.ATTENDANCE_INCIDENCE_ORIGIN_AUTO = "auto";
exports.ATTENDANCE_INCIDENCE_ORIGIN_MANUAL = "manual";
// Llave de traducción (no el texto) por tipo de incidencia — reutiliza las que
// ya existen (onTime/late/absent) y agrega las que faltaban.
exports.ATTENDANCE_INCIDENCE_LABEL_KEYS = {
    [exports.ATTENDANCE_INCIDENCE_ONTIME]: "onTime",
    [exports.ATTENDANCE_INCIDENCE_LATE]: "late",
    [exports.ATTENDANCE_INCIDENCE_ABSENT]: "absent",
    [exports.ATTENDANCE_INCIDENCE_EARLYLEAVE]: "earlyLeave",
    [exports.ATTENDANCE_INCIDENCE_MISSINGPUNCH]: "missingPunch",
    [exports.ATTENDANCE_INCIDENCE_EXCESSBREAK]: "excessBreak",
    [exports.ATTENDANCE_INCIDENCE_PERMISSION]: "permission",
    [exports.ATTENDANCE_INCIDENCE_VACATION]: "vacation",
    [exports.ATTENDANCE_INCIDENCE_DISABILITY]: "disability",
    [exports.ATTENDANCE_INCIDENCE_JUSTIFIEDABSENCE]: "justifiedAbsence",
    [exports.ATTENDANCE_INCIDENCE_UNJUSTIFIEDABSENCE]: "unjustifiedAbsence",
};
// Color por tipo de incidencia — se usa tanto en el badge del detalle del día
// como en calendar_events (mismo código de color, sembrado por db.txt) para
// que el calendario de asistencia y la UI de RH pinten exactamente igual.
exports.ATTENDANCE_INCIDENCE_COLORS = {
    [exports.ATTENDANCE_INCIDENCE_ONTIME]: "#2e7d32",
    [exports.ATTENDANCE_INCIDENCE_LATE]: "#f9a825",
    [exports.ATTENDANCE_INCIDENCE_ABSENT]: "#c62828",
    [exports.ATTENDANCE_INCIDENCE_EARLYLEAVE]: "#ef6c00",
    [exports.ATTENDANCE_INCIDENCE_MISSINGPUNCH]: "#757575",
    [exports.ATTENDANCE_INCIDENCE_EXCESSBREAK]: "#6a1b9a",
    [exports.ATTENDANCE_INCIDENCE_PERMISSION]: "#1565c0",
    [exports.ATTENDANCE_INCIDENCE_VACATION]: "#00897b",
    [exports.ATTENDANCE_INCIDENCE_DISABILITY]: "#5e35b1",
    [exports.ATTENDANCE_INCIDENCE_JUSTIFIEDABSENCE]: "#0097a7",
    [exports.ATTENDANCE_INCIDENCE_UNJUSTIFIEDABSENCE]: "#b71c1c",
};
// El "tipo de calendario" (typedoc_cal / calendar_events.code_caleve) que usa
// el calendario de asistencia al espejear una incidencia en `calendar`.
exports.ATTENDANCE_CALENDAR_TYPEDOC_PREFIX = "attendance_";
const attendanceCalendarTypedoc = (typeInc) => `${exports.ATTENDANCE_CALENDAR_TYPEDOC_PREFIX}${typeInc}`;
exports.attendanceCalendarTypedoc = attendanceCalendarTypedoc;
// attendance_imports_rows.status_aimprow
exports.ATTENDANCE_IMPORT_ROW_OK = "ok";
exports.ATTENDANCE_IMPORT_ROW_DUPLICATE = "duplicate";
exports.ATTENDANCE_IMPORT_ROW_ERROR = "error";
exports.ATTENDANCE_IMPORT_ROW_UNMATCHED = "unmatched";
exports.ACCOUNT_TYPE_ASSET = "asset";
exports.ACCOUNT_TYPE_LIABILITY = "liability";
exports.ACCOUNT_TYPE_EQUITY = "equity";
exports.ACCOUNT_TYPE_REVENUE = "revenue";
exports.ACCOUNT_TYPE_COST = "cost";
exports.ACCOUNT_TYPE_EXPENSE = "expense";
exports.ACCOUNT_TYPE_MEMO = "memo";
exports.ACCOUNT_TYPE_OPTIONS = [
    { value: exports.ACCOUNT_TYPE_ASSET, labelKey: "accountTypeAsset" },
    { value: exports.ACCOUNT_TYPE_LIABILITY, labelKey: "accountTypeLiability" },
    { value: exports.ACCOUNT_TYPE_EQUITY, labelKey: "accountTypeEquity" },
    { value: exports.ACCOUNT_TYPE_REVENUE, labelKey: "income" },
    { value: exports.ACCOUNT_TYPE_COST, labelKey: "cost" },
    { value: exports.ACCOUNT_TYPE_EXPENSE, labelKey: "expenseDoc" },
    { value: exports.ACCOUNT_TYPE_MEMO, labelKey: "accountTypeMemo" },
];
exports.ACCOUNT_TYPE_LABEL_KEYS = exports.ACCOUNT_TYPE_OPTIONS.reduce((acc, opt) => {
    acc[opt.value] = opt.labelKey;
    return acc;
}, {});
exports.ACCOUNT_NATURE_DEBIT = "debit";
exports.ACCOUNT_NATURE_CREDIT = "credit";
exports.ACCOUNT_NATURE_OPTIONS = [
    { value: exports.ACCOUNT_NATURE_DEBIT, labelKey: "accountNatureDebit" },
    { value: exports.ACCOUNT_NATURE_CREDIT, labelKey: "accountNatureCredit" },
];
exports.ACCOUNT_NATURE_LABEL_KEYS = exports.ACCOUNT_NATURE_OPTIONS.reduce((acc, opt) => {
    acc[opt.value] = opt.labelKey;
    return acc;
}, {});
exports.ACCOUNTINGMENU_IDMM = 7;
exports.ACCOUNTINGMENU_IDMM2 = 26; // Catalogo de Cuentas (+ perfiles y config)
exports.ACCOUNTINGENTRIESMENU_IDMM2 = 28; // Polizas (+ polizas recurrentes)
exports.ACCOUNTINGREPORTSMENU_IDMM2 = 29; // Reportes: balanza, ER, BG, libros
exports.ACCOUNTINGCLOSINGMENU_IDMM2 = 33; // Cierre: saldos iniciales, cierre, revaluacion
// Clasificacion de cuentas para el Estado de Resultados (accounting_accounts.stmtgroup_acc).
// Independiente de la numeracion del catalogo: cada empresa marca sus cuentas.
exports.STMT_GROUP_REVENUE = "revenue";
exports.STMT_GROUP_COST_OF_SALES = "cost_of_sales";
exports.STMT_GROUP_OPERATING_EXPENSE = "operating_expense";
exports.STMT_GROUP_OTHER_INCOME = "other_income";
exports.STMT_GROUP_OTHER_EXPENSE = "other_expense";
exports.STMT_GROUP_FINANCIAL_INCOME = "financial_income";
exports.STMT_GROUP_FINANCIAL_EXPENSE = "financial_expense";
exports.STMT_GROUP_INCOME_TAX = "income_tax";
// Orden = orden de aparicion en el reporte.
exports.STMT_GROUP_OPTIONS = [
    { value: "", labelKey: "unclassified", order: 0 },
    { value: exports.STMT_GROUP_REVENUE, labelKey: "statementGroupRevenue", order: 1 },
    { value: exports.STMT_GROUP_COST_OF_SALES, labelKey: "statementGroupCost", order: 2 },
    {
        value: exports.STMT_GROUP_OPERATING_EXPENSE,
        labelKey: "statementGroupOpex",
        order: 3,
    },
    {
        value: exports.STMT_GROUP_OTHER_INCOME,
        labelKey: "statementGroupOtherIncome",
        order: 4,
    },
    {
        value: exports.STMT_GROUP_OTHER_EXPENSE,
        labelKey: "statementGroupOtherExpense",
        order: 5,
    },
    {
        value: exports.STMT_GROUP_FINANCIAL_INCOME,
        labelKey: "statementGroupFinIncome",
        order: 6,
    },
    {
        value: exports.STMT_GROUP_FINANCIAL_EXPENSE,
        labelKey: "statementGroupFinExpense",
        order: 7,
    },
    {
        value: exports.STMT_GROUP_INCOME_TAX,
        labelKey: "statementGroupIncomeTax",
        order: 8,
    },
];
exports.STMT_GROUP_LABEL_KEYS = exports.STMT_GROUP_OPTIONS.reduce((acc, opt) => {
    acc[opt.value] = opt.labelKey;
    return acc;
}, {});
// ---- Polizas contables ----
exports.ACCOUNTING_ENTRY_TYPE_OPTIONS = [
    { value: "diario", labelKey: "entryTypeDiario" },
    { value: "ingresos", labelKey: "entryTypeIngresos" },
    { value: "egresos", labelKey: "entryTypeEgresos" },
];
exports.ACCOUNTING_ENTRY_TYPE_LABEL_KEYS = exports.ACCOUNTING_ENTRY_TYPE_OPTIONS.reduce((acc, opt) => {
    acc[opt.value] = opt.labelKey;
    return acc;
}, {});
exports.ACCOUNTING_ENTRY_STATUS_DRAFT = 0;
exports.ACCOUNTING_ENTRY_STATUS_POSTED = 1;
exports.ACCOUNTING_ENTRY_STATUS_CANCELLED = -2;
exports.ACCOUNTING_ENTRY_STATUS_LABEL_KEYS = {
    [exports.ACCOUNTING_ENTRY_STATUS_DRAFT]: "entryStatusDraft",
    [exports.ACCOUNTING_ENTRY_STATUS_POSTED]: "entryStatusPosted",
    [exports.ACCOUNTING_ENTRY_STATUS_CANCELLED]: "entryStatusCancelled",
};
exports.ACCOUNTPROFILE_TYPE_PRODUCT = "product";
exports.ACCOUNTPROFILE_TYPE_EXPENSE = "expense";
exports.ACCOUNTPROFILE_TYPE_OPTIONS = [
    { value: exports.ACCOUNTPROFILE_TYPE_PRODUCT, labelKey: "productOrService" },
    { value: exports.ACCOUNTPROFILE_TYPE_EXPENSE, labelKey: "expenseDoc" },
];
exports.ACCOUNTPROFILE_TYPE_LABEL_KEYS = exports.ACCOUNTPROFILE_TYPE_OPTIONS.reduce((acc, opt) => {
    acc[opt.value] = opt.labelKey;
    return acc;
}, {});
exports.PROFILE_ACCOUNTTYPE_SALES_REVENUE = "sales_revenue";
exports.PROFILE_ACCOUNTTYPE_INVENTORY_ASSET = "inventory_asset";
exports.PROFILE_ACCOUNTTYPE_COST_OF_SALES = "cost_of_sales";
exports.PROFILE_ACCOUNTTYPE_SALES_RETURN = "sales_return";
exports.PROFILE_ACCOUNTTYPE_SALES_DISCOUNT = "sales_discount";
exports.PROFILE_ACCOUNTTYPE_INVENTORY_GAIN = "inventory_gain";
exports.PROFILE_ACCOUNTTYPE_INVENTORY_LOSS = "inventory_loss";
exports.PROFILE_ACCOUNTTYPE_PURCHASE_EXPENSE = "purchase_expense";
exports.PROFILE_ACCOUNTTYPE_LABEL_KEYS = {
    [exports.PROFILE_ACCOUNTTYPE_SALES_REVENUE]: "salesRevenue",
    [exports.PROFILE_ACCOUNTTYPE_INVENTORY_ASSET]: "inventory",
    [exports.PROFILE_ACCOUNTTYPE_COST_OF_SALES]: "statementGroupCost",
    [exports.PROFILE_ACCOUNTTYPE_SALES_RETURN]: "salesReturns",
    [exports.PROFILE_ACCOUNTTYPE_SALES_DISCOUNT]: "salesDiscounts",
    [exports.PROFILE_ACCOUNTTYPE_INVENTORY_GAIN]: "inventoryAdjustmentGain",
    [exports.PROFILE_ACCOUNTTYPE_INVENTORY_LOSS]: "inventoryAdjustmentLoss",
    [exports.PROFILE_ACCOUNTTYPE_PURCHASE_EXPENSE]: "expenseAccount",
};
exports.PROFILE_ACCOUNTTYPES_BY_PROFILETYPE = {
    [exports.ACCOUNTPROFILE_TYPE_PRODUCT]: [
        exports.PROFILE_ACCOUNTTYPE_SALES_REVENUE,
        exports.PROFILE_ACCOUNTTYPE_INVENTORY_ASSET,
        exports.PROFILE_ACCOUNTTYPE_COST_OF_SALES,
        exports.PROFILE_ACCOUNTTYPE_SALES_RETURN,
        exports.PROFILE_ACCOUNTTYPE_SALES_DISCOUNT,
        exports.PROFILE_ACCOUNTTYPE_INVENTORY_GAIN,
        exports.PROFILE_ACCOUNTTYPE_INVENTORY_LOSS,
    ],
    [exports.ACCOUNTPROFILE_TYPE_EXPENSE]: [exports.PROFILE_ACCOUNTTYPE_PURCHASE_EXPENSE],
};
// -------------- Contabilidad: Configuración Contable (asignaciones reales) --------------
// accounting_entity_accounts es la fuente REAL de configuración contable
// (a diferencia de accounting_profiles, que son solo plantillas). Fase 3
// únicamente usa entitytype "company" para la configuración general de cada
// idcmp; la arquitectura queda lista para agregar más entitytype después
// (product, party_customer, party_supplier, bank_account, expense_category,
// warehouse, tax...) sin cambiar la tabla.
exports.ACCOUNTING_ENTITYTYPE_COMPANY = "company";
exports.GENERAL_ACCOUNTTYPE_CUSTOMERS_RECEIVABLE = "customers_receivable";
exports.GENERAL_ACCOUNTTYPE_SUPPLIERS_PAYABLE = "suppliers_payable";
exports.GENERAL_ACCOUNTTYPE_CUSTOMER_ADVANCES = "customer_advances";
exports.GENERAL_ACCOUNTTYPE_SUPPLIER_ADVANCES = "supplier_advances";
exports.GENERAL_ACCOUNTTYPE_EXCHANGE_GAIN = "exchange_gain";
exports.GENERAL_ACCOUNTTYPE_EXCHANGE_LOSS = "exchange_loss";
// Cuentas por defecto para la contabilizacion automatica (Fase 5) cuando el
// producto / categoria no tiene una cuenta propia asignada.
exports.GENERAL_ACCOUNTTYPE_SALES_REVENUE = "sales_revenue";
exports.GENERAL_ACCOUNTTYPE_SALES_DISCOUNT = "sales_discount";
exports.GENERAL_ACCOUNTTYPE_SALES_RETURN = "sales_return";
exports.GENERAL_ACCOUNTTYPE_PURCHASE_EXPENSE = "purchase_expense";
exports.GENERAL_ACCOUNTTYPE_INVENTORY_ASSET = "inventory_asset";
exports.GENERAL_ACCOUNTTYPE_COST_OF_SALES = "cost_of_sales";
exports.GENERAL_ACCOUNTTYPE_BANK_DEFAULT = "bank_default";
exports.GENERAL_ACCOUNTTYPE_ROUNDING = "rounding";
// Resultados de ejercicios anteriores: destino del resultado en el cierre anual.
exports.GENERAL_ACCOUNTTYPE_RETAINED_EARNINGS = "retained_earnings";
// vat_output/vat_input NO viven aquí: los impuestos ahora se configuran de
// forma dinámica a partir del catálogo `taxes` (ver sección Impuestos).
exports.GENERAL_ACCOUNTTYPE_OPTIONS = [
    {
        value: exports.GENERAL_ACCOUNTTYPE_CUSTOMERS_RECEIVABLE,
        labelKey: "customersReceivable",
    },
    {
        value: exports.GENERAL_ACCOUNTTYPE_SUPPLIERS_PAYABLE,
        labelKey: "suppliersPayable",
    },
    {
        value: exports.GENERAL_ACCOUNTTYPE_CUSTOMER_ADVANCES,
        labelKey: "customerAdvances",
    },
    {
        value: exports.GENERAL_ACCOUNTTYPE_SUPPLIER_ADVANCES,
        labelKey: "supplierAdvances",
    },
    { value: exports.GENERAL_ACCOUNTTYPE_EXCHANGE_GAIN, labelKey: "exchangeGain" },
    { value: exports.GENERAL_ACCOUNTTYPE_EXCHANGE_LOSS, labelKey: "exchangeLoss" },
    {
        value: exports.GENERAL_ACCOUNTTYPE_SALES_REVENUE,
        labelKey: "salesDefaultAccount",
    },
    {
        value: exports.GENERAL_ACCOUNTTYPE_SALES_DISCOUNT,
        labelKey: "salesDiscountDefaultAccount",
    },
    {
        value: exports.GENERAL_ACCOUNTTYPE_SALES_RETURN,
        labelKey: "salesReturnDefaultAccount",
    },
    {
        value: exports.GENERAL_ACCOUNTTYPE_PURCHASE_EXPENSE,
        labelKey: "expenseDefaultAccount",
    },
    {
        value: exports.GENERAL_ACCOUNTTYPE_INVENTORY_ASSET,
        labelKey: "inventoryDefaultAccount",
    },
    {
        value: exports.GENERAL_ACCOUNTTYPE_COST_OF_SALES,
        labelKey: "costOfSalesDefaultAccount",
    },
    { value: exports.GENERAL_ACCOUNTTYPE_BANK_DEFAULT, labelKey: "bankDefaultAccount" },
    { value: exports.GENERAL_ACCOUNTTYPE_ROUNDING, labelKey: "roundingAdjustment" },
    {
        value: exports.GENERAL_ACCOUNTTYPE_RETAINED_EARNINGS,
        labelKey: "retainedEarnings",
    },
];
exports.GENERAL_ACCOUNTTYPE_LABEL_KEYS = exports.GENERAL_ACCOUNTTYPE_OPTIONS.reduce((acc, opt) => {
    acc[opt.value] = opt.labelKey;
    return acc;
}, {});
// -------------- Contabilidad: Configuración Contable → Impuestos --------------
// entitytype "tax" + idtarget = taxes.idtax. El catálogo `taxes` es
// compartido en toda la BD (no tiene idcmp), pero cada idcmp asigna sus
// propias cuentas por impuesto en accounting_entity_accounts.
//
// clas_tax ("tax" | "ret") SÍ se usa en todo el proyecto para distinguir
// impuesto trasladable vs. retención (ver ordersPrc.ts / toolBox.tsx).
// side_tax existe en la tabla `taxes` pero NINGÚN cálculo real del proyecto
// lo usa como interruptor de comportamiento — por eso no se usa aquí para
// decidir qué campos mostrar; se usa únicamente clas_tax.
exports.ACCOUNTING_ENTITYTYPE_TAX = "tax";
exports.TAX_CLAS_RETENTION = "ret";
exports.TAX_ACCOUNTTYPE_OUTPUT = "tax_output";
exports.TAX_ACCOUNTTYPE_INPUT = "tax_input";
exports.TAX_ACCOUNTTYPE_WITHHOLDING_RECEIVABLE = "withholding_receivable";
exports.TAX_ACCOUNTTYPE_WITHHOLDING_PAYABLE = "withholding_payable";
exports.TAX_ACCOUNTTYPE_LABEL_KEYS = {
    [exports.TAX_ACCOUNTTYPE_OUTPUT]: "taxOutputAccount",
    [exports.TAX_ACCOUNTTYPE_INPUT]: "taxInputAccount",
    [exports.TAX_ACCOUNTTYPE_WITHHOLDING_RECEIVABLE]: "withholdingReceivableAccount",
    [exports.TAX_ACCOUNTTYPE_WITHHOLDING_PAYABLE]: "withholdingPayableAccount",
};
// Qué conceptos de cuenta mostrar según clas_tax del impuesto. Ninguno es
// obligatorio: un impuesto puede quedar sin ninguna cuenta configurada.
exports.TAX_ACCOUNTTYPES_BY_CLAS = {
    [exports.TAX_CLAS_RETENTION]: [
        exports.TAX_ACCOUNTTYPE_WITHHOLDING_RECEIVABLE,
        exports.TAX_ACCOUNTTYPE_WITHHOLDING_PAYABLE,
    ],
};
exports.TAX_ACCOUNTTYPES_DEFAULT = [
    exports.TAX_ACCOUNTTYPE_OUTPUT,
    exports.TAX_ACCOUNTTYPE_INPUT,
];
// -------------- Contabilidad: Configuración Contable → Productos --------------
// entitytype "product" + idtarget = products.idprod. Reutiliza el mismo
// vocabulario de accounttype que accounting_profiles tipo "product"
// (PROFILE_ACCOUNTTYPE_* / PROFILE_ACCOUNTTYPES_BY_PROFILETYPE) — un perfil
// es solo una plantilla de estos mismos conceptos, no un vocabulario aparte.
exports.ACCOUNTING_ENTITYTYPE_PRODUCT = "product";
// Todos los conceptos aplican a un producto inventariable (mismo set que un
// perfil tipo "product"). Un producto no inventariable (servicio) solo
// necesita, como máximo, ingresos y costo de ventas — no se le exige
// inventario ni ajustes. Basado en `inventorytracked_prod`, el único campo
// que products ya usa con lógica real de negocio para esta distinción.
exports.PRODUCT_ACCOUNTTYPES_INVENTORIED = exports.PROFILE_ACCOUNTTYPES_BY_PROFILETYPE[exports.ACCOUNTPROFILE_TYPE_PRODUCT];
exports.PRODUCT_ACCOUNTTYPES_SERVICE = [
    exports.PROFILE_ACCOUNTTYPE_SALES_REVENUE,
    exports.PROFILE_ACCOUNTTYPE_COST_OF_SALES,
];
// -------------- Contabilidad: Configuración Contable → Cuentas Bancarias --------------
// entitytype "bank_account" + idtarget = accounts.idacc (la cuenta
// bancaria/financiera de Tesorería, NO accounting_accounts). Cubre banco,
// efectivo y pasarela por igual — el tipo operativo ya vive en
// accounts.type_acc, no hace falta un entitytype distinto solo por eso.
exports.ACCOUNTING_ENTITYTYPE_BANK_ACCOUNT = "bank_account";
exports.BANKACCOUNT_ACCOUNTTYPE_CASH_ACCOUNT = "cash_account";
//# sourceMappingURL=consts.js.map