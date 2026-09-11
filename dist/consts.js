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
export const RECORD_BITACORA = "bitacora";
export const RECORD_RECORDS = "records";
export const RECORD_FOLDERS = "folders";
export const OS_ANDROID = "android";
export const OS_IOS = "ios";
export const SIZE_FULLSCREN = "fullscreen";
export const FILETYPE_PDF = "pdf";
export const FILETYPE_IMAGE = "image";
export const FILETYPE_OTHER = "other";
export const TYPE_ORDERS = "orders";
export const TYPE_RECURRENCES = "recurrences";
export const RECURRENCE_DAILY = "daily";
export const RECURRENCE_WEEKLY = "weekly";
export const RECURRENCE_BIWEEKLY = "biweekly";
export const RECURRENCE_MONTHLY = "monthly";
export const RECURRENCE_BIMONTHLY = "bimonthly";
export const RECURRENCE_QUARTERLY = "quarterly";
export const RECURRENCE_SEMIANNUAL = "semiannual";
export const RECURRENCE_ANNUAL = "annual";
export const RECURRENCE_FREQUENCY_OPTIONS = [
    { value: RECURRENCE_ANNUAL, label: "Anual" },
    { value: RECURRENCE_SEMIANNUAL, label: "Semestral" },
    { value: RECURRENCE_QUARTERLY, label: "Trimestral" },
    { value: RECURRENCE_BIMONTHLY, label: "Bimestral" },
    { value: RECURRENCE_MONTHLY, label: "Mensual" },
    { value: RECURRENCE_BIWEEKLY, label: "Quincenal" },
    { value: RECURRENCE_WEEKLY, label: "Semanal" },
    { value: RECURRENCE_DAILY, label: "Diario" },
];
export const RECURRENCE_FREQUENCY_LABELS = RECURRENCE_FREQUENCY_OPTIONS.reduce((acc, opt) => {
    acc[opt.value] = opt.label;
    return acc;
}, {});
// CFDI 4.0 factura global (público en general): catálogos c_Periodicidad y
// c_Meses del SAT, más los valores fijos que el nodo InformacionGlobal obliga
// a usar en el receptor.
export const CFDI_GLOBAL_RFC = "XAXX010101000";
export const CFDI_GLOBAL_CFDIUSE = "S01";
export const CFDI_GLOBAL_TAX_REGIME = "616";
export const CFDI_GLOBAL_PAYMETHOD = "PUE";
export const CFDI_GLOBAL_PERIODICITY_OPTIONS = [
    { value: "01", label: "Diaria" },
    { value: "02", label: "Semanal" },
    { value: "03", label: "Quincenal" },
    { value: "04", label: "Mensual" },
    { value: "05", label: "Bimestral" },
];
// 01-12 son meses; 13-18 son bimestres y sólo aplican con periodicidad 05.
export const CFDI_GLOBAL_MONTH_OPTIONS = [
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
export const ORDER_TYPE_LABELS = {
    1: "Cotización",
    2: "Pedido",
    3: "Factura",
    4: "Ticket",
    5: "Bonificación",
    6: "Devolución",
};
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
export const FORM_ATTENDANCE = "attendance";
export const MAILSUPPLIER_GMAIL = "gmail";
export const MAILSUPPLIER_OUTLOOK = "outlook";
export const MAILSUPPLIER_OTHER = "other";
export const MAILSECURITY_SSL = "ssl";
export const MAILSECURITY_STARTTLS = "starttls";
export const MAILSECURITY_NONE = "none";
export const MAILMENU_IDMM = 6;
export const MAILMENU_IDMM2 = 25;
export const MAILFOLDER_INBOX = "INBOX";
export const MAILFOLDER_SENT = "SENT";
export const MAILFOLDER_DRAFTS = "DRAFTS";
export const MAILFOLDER_TRASH = "TRASH";
export const MAILFOLDER_SPAM = "SPAM";
export const MAILFOLDER_ARCHIVE = "ARCHIVE";
export const CONCEPT_MAIN = "main";
export const CONCEPT_FORM = "form";
export const CONCEPT_PRODUCTS = "product";
export const VIEW_BOARD = "board";
export const VIEW_GALLERY = "gallery";
export const VIEW_TABLE = "table";
export const ROLE_LABELS = {
    admin: "Admin",
    team: "Equipo",
    agent: "Agente",
};
// users.type_party: quién es el usuario, no a qué empresa pertenece.
export const USERPARTY_INTERNAL = 1;
export const USERPARTY_EXTERNAL = 2; // portal de clientes/proveedores
export const USERPARTY_AI = 3; // agentes automatizados
// comissions.type_com: sobre qué evento del producto se calcula la comisión.
export const COMISSION_TYPE_PAYED = "payedbyproduct";
export const COMISSION_TYPE_SOLD = "soldbyproduct";
export const ROLE_CUSTOMER = "customer";
export const ROLE_SUPPLIER = "supplier";
export const ROLE_RH = "rh";
export const ROLE_CONTACT = "contact";
export const ROLE_MAP = {
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
export const MIME_MAP = {
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
export const COLOR_PALETTE_NAMES = {
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
export const DASHBOARD_CATEGORIES = ["all", "general", "reports"];
export const VALID_CLOCK_TYPES = [
    "in",
    "break_start",
    "break_end",
    "out",
];
export const CLOCK_TYPE_TO_STATUS = {
    in: "working",
    break_start: "onBreak",
    break_end: "working",
    out: "idle",
};
// Llave de traducción (no el texto) para cada type_assist — reutiliza los
// mismos labels que ya usan los botones del reloj checador (AttendanceTracker).
export const ATTENDANCE_RECORD_TYPE_LABEL_KEYS = {
    in: "arrival",
    break_start: "break",
    break_end: "finishBreak",
    out: "exit",
};
// source_assist: de dónde salió la checada.
export const ATTENDANCE_SOURCE_WIDGET = "widget";
export const ATTENDANCE_SOURCE_MANUAL = "manual";
export const ATTENDANCE_SOURCE_IMPORT = "import";
// type_inc — capa de incidencias (attendance_incidences). Las primeras tres
// (ontime/late/absent) y earlyleave/missingpunch/excessbreak las genera el
// motor de políticas a partir de las checadas; el resto RH las captura a mano.
export const ATTENDANCE_INCIDENCE_ONTIME = "ontime";
export const ATTENDANCE_INCIDENCE_LATE = "late";
export const ATTENDANCE_INCIDENCE_ABSENT = "absent";
export const ATTENDANCE_INCIDENCE_EARLYLEAVE = "earlyleave";
export const ATTENDANCE_INCIDENCE_MISSINGPUNCH = "missingpunch";
export const ATTENDANCE_INCIDENCE_EXCESSBREAK = "excessbreak";
export const ATTENDANCE_INCIDENCE_PERMISSION = "permission";
export const ATTENDANCE_INCIDENCE_VACATION = "vacation";
export const ATTENDANCE_INCIDENCE_DISABILITY = "disability";
export const ATTENDANCE_INCIDENCE_JUSTIFIEDABSENCE = "justifiedabsence";
export const ATTENDANCE_INCIDENCE_UNJUSTIFIEDABSENCE = "unjustifiedabsence";
export const ATTENDANCE_INCIDENCE_TYPES = [
    ATTENDANCE_INCIDENCE_ONTIME,
    ATTENDANCE_INCIDENCE_LATE,
    ATTENDANCE_INCIDENCE_ABSENT,
    ATTENDANCE_INCIDENCE_EARLYLEAVE,
    ATTENDANCE_INCIDENCE_MISSINGPUNCH,
    ATTENDANCE_INCIDENCE_EXCESSBREAK,
    ATTENDANCE_INCIDENCE_PERMISSION,
    ATTENDANCE_INCIDENCE_VACATION,
    ATTENDANCE_INCIDENCE_DISABILITY,
    ATTENDANCE_INCIDENCE_JUSTIFIEDABSENCE,
    ATTENDANCE_INCIDENCE_UNJUSTIFIEDABSENCE,
];
// Las que RH captura/edita a mano; las demás solo las escribe el motor.
export const ATTENDANCE_INCIDENCE_MANUAL_TYPES = [
    ATTENDANCE_INCIDENCE_PERMISSION,
    ATTENDANCE_INCIDENCE_VACATION,
    ATTENDANCE_INCIDENCE_DISABILITY,
    ATTENDANCE_INCIDENCE_JUSTIFIEDABSENCE,
    ATTENDANCE_INCIDENCE_UNJUSTIFIEDABSENCE,
];
export const ATTENDANCE_INCIDENCE_ORIGIN_AUTO = "auto";
export const ATTENDANCE_INCIDENCE_ORIGIN_MANUAL = "manual";
// Llave de traducción (no el texto) por tipo de incidencia — reutiliza las que
// ya existen (onTime/late/absent) y agrega las que faltaban.
export const ATTENDANCE_INCIDENCE_LABEL_KEYS = {
    [ATTENDANCE_INCIDENCE_ONTIME]: "onTime",
    [ATTENDANCE_INCIDENCE_LATE]: "late",
    [ATTENDANCE_INCIDENCE_ABSENT]: "absent",
    [ATTENDANCE_INCIDENCE_EARLYLEAVE]: "earlyLeave",
    [ATTENDANCE_INCIDENCE_MISSINGPUNCH]: "missingPunch",
    [ATTENDANCE_INCIDENCE_EXCESSBREAK]: "excessBreak",
    [ATTENDANCE_INCIDENCE_PERMISSION]: "permission",
    [ATTENDANCE_INCIDENCE_VACATION]: "vacation",
    [ATTENDANCE_INCIDENCE_DISABILITY]: "disability",
    [ATTENDANCE_INCIDENCE_JUSTIFIEDABSENCE]: "justifiedAbsence",
    [ATTENDANCE_INCIDENCE_UNJUSTIFIEDABSENCE]: "unjustifiedAbsence",
};
// Color por tipo de incidencia — se usa tanto en el badge del detalle del día
// como en calendar_events (mismo código de color, sembrado por db.txt) para
// que el calendario de asistencia y la UI de RH pinten exactamente igual.
export const ATTENDANCE_INCIDENCE_COLORS = {
    [ATTENDANCE_INCIDENCE_ONTIME]: "#2e7d32",
    [ATTENDANCE_INCIDENCE_LATE]: "#f9a825",
    [ATTENDANCE_INCIDENCE_ABSENT]: "#c62828",
    [ATTENDANCE_INCIDENCE_EARLYLEAVE]: "#ef6c00",
    [ATTENDANCE_INCIDENCE_MISSINGPUNCH]: "#757575",
    [ATTENDANCE_INCIDENCE_EXCESSBREAK]: "#6a1b9a",
    [ATTENDANCE_INCIDENCE_PERMISSION]: "#1565c0",
    [ATTENDANCE_INCIDENCE_VACATION]: "#00897b",
    [ATTENDANCE_INCIDENCE_DISABILITY]: "#5e35b1",
    [ATTENDANCE_INCIDENCE_JUSTIFIEDABSENCE]: "#0097a7",
    [ATTENDANCE_INCIDENCE_UNJUSTIFIEDABSENCE]: "#b71c1c",
};
// El "tipo de calendario" (typedoc_cal / calendar_events.code_caleve) que usa
// el calendario de asistencia al espejear una incidencia en `calendar`.
export const ATTENDANCE_CALENDAR_TYPEDOC_PREFIX = "attendance_";
export const attendanceCalendarTypedoc = (typeInc) => `${ATTENDANCE_CALENDAR_TYPEDOC_PREFIX}${typeInc}`;
// attendance_imports_rows.status_aimprow
export const ATTENDANCE_IMPORT_ROW_OK = "ok";
export const ATTENDANCE_IMPORT_ROW_DUPLICATE = "duplicate";
export const ATTENDANCE_IMPORT_ROW_ERROR = "error";
export const ATTENDANCE_IMPORT_ROW_UNMATCHED = "unmatched";
export const ACCOUNT_TYPE_ASSET = "asset";
export const ACCOUNT_TYPE_LIABILITY = "liability";
export const ACCOUNT_TYPE_EQUITY = "equity";
export const ACCOUNT_TYPE_REVENUE = "revenue";
export const ACCOUNT_TYPE_COST = "cost";
export const ACCOUNT_TYPE_EXPENSE = "expense";
export const ACCOUNT_TYPE_MEMO = "memo";
export const ACCOUNT_TYPE_OPTIONS = [
    { value: ACCOUNT_TYPE_ASSET, labelKey: "accountTypeAsset" },
    { value: ACCOUNT_TYPE_LIABILITY, labelKey: "accountTypeLiability" },
    { value: ACCOUNT_TYPE_EQUITY, labelKey: "accountTypeEquity" },
    { value: ACCOUNT_TYPE_REVENUE, labelKey: "income" },
    { value: ACCOUNT_TYPE_COST, labelKey: "cost" },
    { value: ACCOUNT_TYPE_EXPENSE, labelKey: "expenseDoc" },
    { value: ACCOUNT_TYPE_MEMO, labelKey: "accountTypeMemo" },
];
export const ACCOUNT_TYPE_LABEL_KEYS = ACCOUNT_TYPE_OPTIONS.reduce((acc, opt) => {
    acc[opt.value] = opt.labelKey;
    return acc;
}, {});
export const ACCOUNT_NATURE_DEBIT = "debit";
export const ACCOUNT_NATURE_CREDIT = "credit";
export const ACCOUNT_NATURE_OPTIONS = [
    { value: ACCOUNT_NATURE_DEBIT, labelKey: "accountNatureDebit" },
    { value: ACCOUNT_NATURE_CREDIT, labelKey: "accountNatureCredit" },
];
export const ACCOUNT_NATURE_LABEL_KEYS = ACCOUNT_NATURE_OPTIONS.reduce((acc, opt) => {
    acc[opt.value] = opt.labelKey;
    return acc;
}, {});
export const ACCOUNTINGMENU_IDMM = 7;
export const ACCOUNTINGMENU_IDMM2 = 26; // Catalogo de Cuentas (+ perfiles y config)
export const ACCOUNTINGENTRIESMENU_IDMM2 = 28; // Polizas (+ polizas recurrentes)
export const ACCOUNTINGREPORTSMENU_IDMM2 = 29; // Reportes: balanza, ER, BG, libros
export const ACCOUNTINGCLOSINGMENU_IDMM2 = 33; // Cierre: saldos iniciales, cierre, revaluacion
// Clasificacion de cuentas para el Estado de Resultados (accounting_accounts.stmtgroup_acc).
// Independiente de la numeracion del catalogo: cada empresa marca sus cuentas.
export const STMT_GROUP_REVENUE = "revenue";
export const STMT_GROUP_COST_OF_SALES = "cost_of_sales";
export const STMT_GROUP_OPERATING_EXPENSE = "operating_expense";
export const STMT_GROUP_OTHER_INCOME = "other_income";
export const STMT_GROUP_OTHER_EXPENSE = "other_expense";
export const STMT_GROUP_FINANCIAL_INCOME = "financial_income";
export const STMT_GROUP_FINANCIAL_EXPENSE = "financial_expense";
export const STMT_GROUP_INCOME_TAX = "income_tax";
// Orden = orden de aparicion en el reporte.
export const STMT_GROUP_OPTIONS = [
    { value: "", labelKey: "unclassified", order: 0 },
    { value: STMT_GROUP_REVENUE, labelKey: "statementGroupRevenue", order: 1 },
    { value: STMT_GROUP_COST_OF_SALES, labelKey: "statementGroupCost", order: 2 },
    {
        value: STMT_GROUP_OPERATING_EXPENSE,
        labelKey: "statementGroupOpex",
        order: 3,
    },
    {
        value: STMT_GROUP_OTHER_INCOME,
        labelKey: "statementGroupOtherIncome",
        order: 4,
    },
    {
        value: STMT_GROUP_OTHER_EXPENSE,
        labelKey: "statementGroupOtherExpense",
        order: 5,
    },
    {
        value: STMT_GROUP_FINANCIAL_INCOME,
        labelKey: "statementGroupFinIncome",
        order: 6,
    },
    {
        value: STMT_GROUP_FINANCIAL_EXPENSE,
        labelKey: "statementGroupFinExpense",
        order: 7,
    },
    {
        value: STMT_GROUP_INCOME_TAX,
        labelKey: "statementGroupIncomeTax",
        order: 8,
    },
];
export const STMT_GROUP_LABEL_KEYS = STMT_GROUP_OPTIONS.reduce((acc, opt) => {
    acc[opt.value] = opt.labelKey;
    return acc;
}, {});
// ---- Polizas contables ----
export const ACCOUNTING_ENTRY_TYPE_OPTIONS = [
    { value: "diario", labelKey: "entryTypeDiario" },
    { value: "ingresos", labelKey: "entryTypeIngresos" },
    { value: "egresos", labelKey: "entryTypeEgresos" },
];
export const ACCOUNTING_ENTRY_TYPE_LABEL_KEYS = ACCOUNTING_ENTRY_TYPE_OPTIONS.reduce((acc, opt) => {
    acc[opt.value] = opt.labelKey;
    return acc;
}, {});
export const ACCOUNTING_ENTRY_STATUS_DRAFT = 0;
export const ACCOUNTING_ENTRY_STATUS_POSTED = 1;
export const ACCOUNTING_ENTRY_STATUS_CANCELLED = -2;
export const ACCOUNTING_ENTRY_STATUS_LABEL_KEYS = {
    [ACCOUNTING_ENTRY_STATUS_DRAFT]: "entryStatusDraft",
    [ACCOUNTING_ENTRY_STATUS_POSTED]: "entryStatusPosted",
    [ACCOUNTING_ENTRY_STATUS_CANCELLED]: "entryStatusCancelled",
};
export const ACCOUNTPROFILE_TYPE_PRODUCT = "product";
export const ACCOUNTPROFILE_TYPE_EXPENSE = "expense";
export const ACCOUNTPROFILE_TYPE_OPTIONS = [
    { value: ACCOUNTPROFILE_TYPE_PRODUCT, labelKey: "productOrService" },
    { value: ACCOUNTPROFILE_TYPE_EXPENSE, labelKey: "expenseDoc" },
];
export const ACCOUNTPROFILE_TYPE_LABEL_KEYS = ACCOUNTPROFILE_TYPE_OPTIONS.reduce((acc, opt) => {
    acc[opt.value] = opt.labelKey;
    return acc;
}, {});
export const PROFILE_ACCOUNTTYPE_SALES_REVENUE = "sales_revenue";
export const PROFILE_ACCOUNTTYPE_INVENTORY_ASSET = "inventory_asset";
export const PROFILE_ACCOUNTTYPE_COST_OF_SALES = "cost_of_sales";
export const PROFILE_ACCOUNTTYPE_SALES_RETURN = "sales_return";
export const PROFILE_ACCOUNTTYPE_SALES_DISCOUNT = "sales_discount";
export const PROFILE_ACCOUNTTYPE_INVENTORY_GAIN = "inventory_gain";
export const PROFILE_ACCOUNTTYPE_INVENTORY_LOSS = "inventory_loss";
export const PROFILE_ACCOUNTTYPE_PURCHASE_EXPENSE = "purchase_expense";
export const PROFILE_ACCOUNTTYPE_LABEL_KEYS = {
    [PROFILE_ACCOUNTTYPE_SALES_REVENUE]: "salesRevenue",
    [PROFILE_ACCOUNTTYPE_INVENTORY_ASSET]: "inventory",
    [PROFILE_ACCOUNTTYPE_COST_OF_SALES]: "statementGroupCost",
    [PROFILE_ACCOUNTTYPE_SALES_RETURN]: "salesReturns",
    [PROFILE_ACCOUNTTYPE_SALES_DISCOUNT]: "salesDiscounts",
    [PROFILE_ACCOUNTTYPE_INVENTORY_GAIN]: "inventoryAdjustmentGain",
    [PROFILE_ACCOUNTTYPE_INVENTORY_LOSS]: "inventoryAdjustmentLoss",
    [PROFILE_ACCOUNTTYPE_PURCHASE_EXPENSE]: "expenseAccount",
};
export const PROFILE_ACCOUNTTYPES_BY_PROFILETYPE = {
    [ACCOUNTPROFILE_TYPE_PRODUCT]: [
        PROFILE_ACCOUNTTYPE_SALES_REVENUE,
        PROFILE_ACCOUNTTYPE_INVENTORY_ASSET,
        PROFILE_ACCOUNTTYPE_COST_OF_SALES,
        PROFILE_ACCOUNTTYPE_SALES_RETURN,
        PROFILE_ACCOUNTTYPE_SALES_DISCOUNT,
        PROFILE_ACCOUNTTYPE_INVENTORY_GAIN,
        PROFILE_ACCOUNTTYPE_INVENTORY_LOSS,
    ],
    [ACCOUNTPROFILE_TYPE_EXPENSE]: [PROFILE_ACCOUNTTYPE_PURCHASE_EXPENSE],
};
// -------------- Contabilidad: Configuración Contable (asignaciones reales) --------------
// accounting_entity_accounts es la fuente REAL de configuración contable
// (a diferencia de accounting_profiles, que son solo plantillas). Fase 3
// únicamente usa entitytype "company" para la configuración general de cada
// idcmp; la arquitectura queda lista para agregar más entitytype después
// (product, party_customer, party_supplier, bank_account, expense_category,
// warehouse, tax...) sin cambiar la tabla.
export const ACCOUNTING_ENTITYTYPE_COMPANY = "company";
export const GENERAL_ACCOUNTTYPE_CUSTOMERS_RECEIVABLE = "customers_receivable";
export const GENERAL_ACCOUNTTYPE_SUPPLIERS_PAYABLE = "suppliers_payable";
export const GENERAL_ACCOUNTTYPE_CUSTOMER_ADVANCES = "customer_advances";
export const GENERAL_ACCOUNTTYPE_SUPPLIER_ADVANCES = "supplier_advances";
export const GENERAL_ACCOUNTTYPE_EXCHANGE_GAIN = "exchange_gain";
export const GENERAL_ACCOUNTTYPE_EXCHANGE_LOSS = "exchange_loss";
// Cuentas por defecto para la contabilizacion automatica (Fase 5) cuando el
// producto / categoria no tiene una cuenta propia asignada.
export const GENERAL_ACCOUNTTYPE_SALES_REVENUE = "sales_revenue";
export const GENERAL_ACCOUNTTYPE_SALES_DISCOUNT = "sales_discount";
export const GENERAL_ACCOUNTTYPE_SALES_RETURN = "sales_return";
export const GENERAL_ACCOUNTTYPE_PURCHASE_EXPENSE = "purchase_expense";
export const GENERAL_ACCOUNTTYPE_INVENTORY_ASSET = "inventory_asset";
export const GENERAL_ACCOUNTTYPE_COST_OF_SALES = "cost_of_sales";
export const GENERAL_ACCOUNTTYPE_BANK_DEFAULT = "bank_default";
export const GENERAL_ACCOUNTTYPE_ROUNDING = "rounding";
// Resultados de ejercicios anteriores: destino del resultado en el cierre anual.
export const GENERAL_ACCOUNTTYPE_RETAINED_EARNINGS = "retained_earnings";
// vat_output/vat_input NO viven aquí: los impuestos ahora se configuran de
// forma dinámica a partir del catálogo `taxes` (ver sección Impuestos).
export const GENERAL_ACCOUNTTYPE_OPTIONS = [
    {
        value: GENERAL_ACCOUNTTYPE_CUSTOMERS_RECEIVABLE,
        labelKey: "customersReceivable",
    },
    {
        value: GENERAL_ACCOUNTTYPE_SUPPLIERS_PAYABLE,
        labelKey: "suppliersPayable",
    },
    {
        value: GENERAL_ACCOUNTTYPE_CUSTOMER_ADVANCES,
        labelKey: "customerAdvances",
    },
    {
        value: GENERAL_ACCOUNTTYPE_SUPPLIER_ADVANCES,
        labelKey: "supplierAdvances",
    },
    { value: GENERAL_ACCOUNTTYPE_EXCHANGE_GAIN, labelKey: "exchangeGain" },
    { value: GENERAL_ACCOUNTTYPE_EXCHANGE_LOSS, labelKey: "exchangeLoss" },
    {
        value: GENERAL_ACCOUNTTYPE_SALES_REVENUE,
        labelKey: "salesDefaultAccount",
    },
    {
        value: GENERAL_ACCOUNTTYPE_SALES_DISCOUNT,
        labelKey: "salesDiscountDefaultAccount",
    },
    {
        value: GENERAL_ACCOUNTTYPE_SALES_RETURN,
        labelKey: "salesReturnDefaultAccount",
    },
    {
        value: GENERAL_ACCOUNTTYPE_PURCHASE_EXPENSE,
        labelKey: "expenseDefaultAccount",
    },
    {
        value: GENERAL_ACCOUNTTYPE_INVENTORY_ASSET,
        labelKey: "inventoryDefaultAccount",
    },
    {
        value: GENERAL_ACCOUNTTYPE_COST_OF_SALES,
        labelKey: "costOfSalesDefaultAccount",
    },
    { value: GENERAL_ACCOUNTTYPE_BANK_DEFAULT, labelKey: "bankDefaultAccount" },
    { value: GENERAL_ACCOUNTTYPE_ROUNDING, labelKey: "roundingAdjustment" },
    {
        value: GENERAL_ACCOUNTTYPE_RETAINED_EARNINGS,
        labelKey: "retainedEarnings",
    },
];
export const GENERAL_ACCOUNTTYPE_LABEL_KEYS = GENERAL_ACCOUNTTYPE_OPTIONS.reduce((acc, opt) => {
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
export const ACCOUNTING_ENTITYTYPE_TAX = "tax";
export const TAX_CLAS_RETENTION = "ret";
export const TAX_ACCOUNTTYPE_OUTPUT = "tax_output";
export const TAX_ACCOUNTTYPE_INPUT = "tax_input";
export const TAX_ACCOUNTTYPE_WITHHOLDING_RECEIVABLE = "withholding_receivable";
export const TAX_ACCOUNTTYPE_WITHHOLDING_PAYABLE = "withholding_payable";
export const TAX_ACCOUNTTYPE_LABEL_KEYS = {
    [TAX_ACCOUNTTYPE_OUTPUT]: "taxOutputAccount",
    [TAX_ACCOUNTTYPE_INPUT]: "taxInputAccount",
    [TAX_ACCOUNTTYPE_WITHHOLDING_RECEIVABLE]: "withholdingReceivableAccount",
    [TAX_ACCOUNTTYPE_WITHHOLDING_PAYABLE]: "withholdingPayableAccount",
};
// Qué conceptos de cuenta mostrar según clas_tax del impuesto. Ninguno es
// obligatorio: un impuesto puede quedar sin ninguna cuenta configurada.
export const TAX_ACCOUNTTYPES_BY_CLAS = {
    [TAX_CLAS_RETENTION]: [
        TAX_ACCOUNTTYPE_WITHHOLDING_RECEIVABLE,
        TAX_ACCOUNTTYPE_WITHHOLDING_PAYABLE,
    ],
};
export const TAX_ACCOUNTTYPES_DEFAULT = [
    TAX_ACCOUNTTYPE_OUTPUT,
    TAX_ACCOUNTTYPE_INPUT,
];
// -------------- Contabilidad: Configuración Contable → Productos --------------
// entitytype "product" + idtarget = products.idprod. Reutiliza el mismo
// vocabulario de accounttype que accounting_profiles tipo "product"
// (PROFILE_ACCOUNTTYPE_* / PROFILE_ACCOUNTTYPES_BY_PROFILETYPE) — un perfil
// es solo una plantilla de estos mismos conceptos, no un vocabulario aparte.
export const ACCOUNTING_ENTITYTYPE_PRODUCT = "product";
// Todos los conceptos aplican a un producto inventariable (mismo set que un
// perfil tipo "product"). Un producto no inventariable (servicio) solo
// necesita, como máximo, ingresos y costo de ventas — no se le exige
// inventario ni ajustes. Basado en `inventorytracked_prod`, el único campo
// que products ya usa con lógica real de negocio para esta distinción.
export const PRODUCT_ACCOUNTTYPES_INVENTORIED = PROFILE_ACCOUNTTYPES_BY_PROFILETYPE[ACCOUNTPROFILE_TYPE_PRODUCT];
export const PRODUCT_ACCOUNTTYPES_SERVICE = [
    PROFILE_ACCOUNTTYPE_SALES_REVENUE,
    PROFILE_ACCOUNTTYPE_COST_OF_SALES,
];
// -------------- Contabilidad: Configuración Contable → Cuentas Bancarias --------------
// entitytype "bank_account" + idtarget = accounts.idacc (la cuenta
// bancaria/financiera de Tesorería, NO accounting_accounts). Cubre banco,
// efectivo y pasarela por igual — el tipo operativo ya vive en
// accounts.type_acc, no hace falta un entitytype distinto solo por eso.
export const ACCOUNTING_ENTITYTYPE_BANK_ACCOUNT = "bank_account";
export const BANKACCOUNT_ACCOUNTTYPE_CASH_ACCOUNT = "cash_account";
//# sourceMappingURL=consts.js.map