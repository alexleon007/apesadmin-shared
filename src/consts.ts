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

export const RECURRENCE_FREQUENCY_OPTIONS: {
  value: string;
  label: string;
}[] = [
  { value: RECURRENCE_ANNUAL, label: "Anual" },
  { value: RECURRENCE_SEMIANNUAL, label: "Semestral" },
  { value: RECURRENCE_QUARTERLY, label: "Trimestral" },
  { value: RECURRENCE_BIMONTHLY, label: "Bimestral" },
  { value: RECURRENCE_MONTHLY, label: "Mensual" },
  { value: RECURRENCE_BIWEEKLY, label: "Quincenal" },
  { value: RECURRENCE_WEEKLY, label: "Semanal" },
  { value: RECURRENCE_DAILY, label: "Diario" },
];

export const RECURRENCE_FREQUENCY_LABELS: Record<string, string> =
  RECURRENCE_FREQUENCY_OPTIONS.reduce(
    (acc, opt) => {
      acc[opt.value] = opt.label;
      return acc;
    },
    {} as Record<string, string>,
  );

// CFDI 4.0 factura global (público en general): catálogos c_Periodicidad y
// c_Meses del SAT, más los valores fijos que el nodo InformacionGlobal obliga
// a usar en el receptor.
export const CFDI_GLOBAL_RFC = "XAXX010101000";
export const CFDI_GLOBAL_CFDIUSE = "S01";
export const CFDI_GLOBAL_TAX_REGIME = "616";
export const CFDI_GLOBAL_PAYMETHOD = "PUE";

export const CFDI_GLOBAL_PERIODICITY_OPTIONS: {
  value: string;
  label: string;
}[] = [
  { value: "01", label: "Diaria" },
  { value: "02", label: "Semanal" },
  { value: "03", label: "Quincenal" },
  { value: "04", label: "Mensual" },
  { value: "05", label: "Bimestral" },
];

// 01-12 son meses; 13-18 son bimestres y sólo aplican con periodicidad 05.
export const CFDI_GLOBAL_MONTH_OPTIONS: {
  value: string;
  label: string;
}[] = [
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

export const ORDER_TYPE_LABELS: Record<number, string> = {
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

export const ROLE_LABELS: Record<string, string> = {
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

export const DASHBOARD_CATEGORIES = ["all", "general", "reports"];

export const VALID_CLOCK_TYPES = [
  "in",
  "break_start",
  "break_end",
  "out",
] as const;

export const CLOCK_TYPE_TO_STATUS: Record<string, string> = {
  in: "working",
  break_start: "onBreak",
  break_end: "working",
  out: "idle",
};

export const ACCOUNT_TYPE_ASSET = "asset";
export const ACCOUNT_TYPE_LIABILITY = "liability";
export const ACCOUNT_TYPE_EQUITY = "equity";
export const ACCOUNT_TYPE_REVENUE = "revenue";
export const ACCOUNT_TYPE_COST = "cost";
export const ACCOUNT_TYPE_EXPENSE = "expense";
export const ACCOUNT_TYPE_MEMO = "memo";

export const ACCOUNT_TYPE_OPTIONS: { value: string; label: string }[] = [
  { value: ACCOUNT_TYPE_ASSET, label: "Activo" },
  { value: ACCOUNT_TYPE_LIABILITY, label: "Pasivo" },
  { value: ACCOUNT_TYPE_EQUITY, label: "Capital" },
  { value: ACCOUNT_TYPE_REVENUE, label: "Ingreso" },
  { value: ACCOUNT_TYPE_COST, label: "Costo" },
  { value: ACCOUNT_TYPE_EXPENSE, label: "Gasto" },
  { value: ACCOUNT_TYPE_MEMO, label: "Cuenta de orden" },
];

export const ACCOUNT_TYPE_LABELS: Record<string, string> =
  ACCOUNT_TYPE_OPTIONS.reduce(
    (acc, opt) => {
      acc[opt.value] = opt.label;
      return acc;
    },
    {} as Record<string, string>,
  );

export const ACCOUNT_NATURE_DEBIT = "debit";
export const ACCOUNT_NATURE_CREDIT = "credit";

export const ACCOUNT_NATURE_OPTIONS: { value: string; label: string }[] = [
  { value: ACCOUNT_NATURE_DEBIT, label: "Deudora" },
  { value: ACCOUNT_NATURE_CREDIT, label: "Acreedora" },
];

export const ACCOUNT_NATURE_LABELS: Record<string, string> =
  ACCOUNT_NATURE_OPTIONS.reduce(
    (acc, opt) => {
      acc[opt.value] = opt.label;
      return acc;
    },
    {} as Record<string, string>,
  );

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
export const STMT_GROUP_OPTIONS: {
  value: string;
  label: string;
  order: number;
}[] = [
  { value: "", label: "Sin clasificar", order: 0 },
  { value: STMT_GROUP_REVENUE, label: "Ingresos", order: 1 },
  { value: STMT_GROUP_COST_OF_SALES, label: "Costo de ventas", order: 2 },
  { value: STMT_GROUP_OPERATING_EXPENSE, label: "Gastos de operación", order: 3 },
  { value: STMT_GROUP_OTHER_INCOME, label: "Otros ingresos", order: 4 },
  { value: STMT_GROUP_OTHER_EXPENSE, label: "Otros gastos", order: 5 },
  {
    value: STMT_GROUP_FINANCIAL_INCOME,
    label: "Productos financieros",
    order: 6,
  },
  {
    value: STMT_GROUP_FINANCIAL_EXPENSE,
    label: "Gastos financieros",
    order: 7,
  },
  { value: STMT_GROUP_INCOME_TAX, label: "Impuestos a la utilidad", order: 8 },
];

export const STMT_GROUP_LABELS: Record<string, string> =
  STMT_GROUP_OPTIONS.reduce(
    (acc, opt) => {
      acc[opt.value] = opt.label;
      return acc;
    },
    {} as Record<string, string>,
  );

// ---- Polizas contables ----
export const ACCOUNTING_ENTRY_TYPE_OPTIONS: { value: string; label: string }[] =
  [
    { value: "diario", label: "Diario" },
    { value: "ingresos", label: "Ingresos" },
    { value: "egresos", label: "Egresos" },
  ];

export const ACCOUNTING_ENTRY_TYPE_LABELS: Record<string, string> =
  ACCOUNTING_ENTRY_TYPE_OPTIONS.reduce(
    (acc, opt) => {
      acc[opt.value] = opt.label;
      return acc;
    },
    {} as Record<string, string>,
  );

export const ACCOUNTING_ENTRY_STATUS_DRAFT = 0;
export const ACCOUNTING_ENTRY_STATUS_POSTED = 1;
export const ACCOUNTING_ENTRY_STATUS_CANCELLED = -2;

export const ACCOUNTING_ENTRY_STATUS_LABELS: Record<number, string> = {
  [ACCOUNTING_ENTRY_STATUS_DRAFT]: "Borrador",
  [ACCOUNTING_ENTRY_STATUS_POSTED]: "Contabilizada",
  [ACCOUNTING_ENTRY_STATUS_CANCELLED]: "Cancelada",
};

export const ACCOUNTPROFILE_TYPE_PRODUCT = "product";
export const ACCOUNTPROFILE_TYPE_EXPENSE = "expense";

export const ACCOUNTPROFILE_TYPE_OPTIONS: { value: string; label: string }[] = [
  { value: ACCOUNTPROFILE_TYPE_PRODUCT, label: "Producto / Servicio" },
  { value: ACCOUNTPROFILE_TYPE_EXPENSE, label: "Gasto" },
];

export const ACCOUNTPROFILE_TYPE_LABELS: Record<string, string> =
  ACCOUNTPROFILE_TYPE_OPTIONS.reduce(
    (acc, opt) => {
      acc[opt.value] = opt.label;
      return acc;
    },
    {} as Record<string, string>,
  );

export const PROFILE_ACCOUNTTYPE_SALES_REVENUE = "sales_revenue";
export const PROFILE_ACCOUNTTYPE_INVENTORY_ASSET = "inventory_asset";
export const PROFILE_ACCOUNTTYPE_COST_OF_SALES = "cost_of_sales";
export const PROFILE_ACCOUNTTYPE_SALES_RETURN = "sales_return";
export const PROFILE_ACCOUNTTYPE_SALES_DISCOUNT = "sales_discount";
export const PROFILE_ACCOUNTTYPE_INVENTORY_GAIN = "inventory_gain";
export const PROFILE_ACCOUNTTYPE_INVENTORY_LOSS = "inventory_loss";
export const PROFILE_ACCOUNTTYPE_PURCHASE_EXPENSE = "purchase_expense";

export const PROFILE_ACCOUNTTYPE_LABELS: Record<string, string> = {
  [PROFILE_ACCOUNTTYPE_SALES_REVENUE]: "Ingresos por ventas",
  [PROFILE_ACCOUNTTYPE_INVENTORY_ASSET]: "Inventario",
  [PROFILE_ACCOUNTTYPE_COST_OF_SALES]: "Costo de ventas",
  [PROFILE_ACCOUNTTYPE_SALES_RETURN]: "Devoluciones sobre ventas",
  [PROFILE_ACCOUNTTYPE_SALES_DISCOUNT]: "Descuentos sobre ventas",
  [PROFILE_ACCOUNTTYPE_INVENTORY_GAIN]: "Ajuste positivo de inventario",
  [PROFILE_ACCOUNTTYPE_INVENTORY_LOSS]: "Ajuste negativo de inventario",
  [PROFILE_ACCOUNTTYPE_PURCHASE_EXPENSE]: "Cuenta de gasto",
};

export const PROFILE_ACCOUNTTYPES_BY_PROFILETYPE: Record<string, string[]> = {
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

export const GENERAL_ACCOUNTTYPE_OPTIONS: { value: string; label: string }[] =
  [
    {
      value: GENERAL_ACCOUNTTYPE_CUSTOMERS_RECEIVABLE,
      label: "Clientes / Cuentas por cobrar",
    },
    {
      value: GENERAL_ACCOUNTTYPE_SUPPLIERS_PAYABLE,
      label: "Proveedores / Cuentas por pagar",
    },
    {
      value: GENERAL_ACCOUNTTYPE_CUSTOMER_ADVANCES,
      label: "Anticipos de clientes",
    },
    {
      value: GENERAL_ACCOUNTTYPE_SUPPLIER_ADVANCES,
      label: "Anticipos a proveedores",
    },
    { value: GENERAL_ACCOUNTTYPE_EXCHANGE_GAIN, label: "Ganancia cambiaria" },
    { value: GENERAL_ACCOUNTTYPE_EXCHANGE_LOSS, label: "Pérdida cambiaria" },
    {
      value: GENERAL_ACCOUNTTYPE_SALES_REVENUE,
      label: "Ventas (cuenta por defecto)",
    },
    {
      value: GENERAL_ACCOUNTTYPE_SALES_DISCOUNT,
      label: "Descuentos sobre ventas (por defecto)",
    },
    {
      value: GENERAL_ACCOUNTTYPE_SALES_RETURN,
      label: "Devoluciones sobre ventas (por defecto)",
    },
    {
      value: GENERAL_ACCOUNTTYPE_PURCHASE_EXPENSE,
      label: "Gastos (cuenta por defecto)",
    },
    {
      value: GENERAL_ACCOUNTTYPE_INVENTORY_ASSET,
      label: "Inventario (cuenta por defecto)",
    },
    {
      value: GENERAL_ACCOUNTTYPE_COST_OF_SALES,
      label: "Costo de ventas (cuenta por defecto)",
    },
    {
      value: GENERAL_ACCOUNTTYPE_BANK_DEFAULT,
      label: "Banco / caja (cuenta por defecto)",
    },
    { value: GENERAL_ACCOUNTTYPE_ROUNDING, label: "Ajuste por redondeo" },
    {
      value: GENERAL_ACCOUNTTYPE_RETAINED_EARNINGS,
      label: "Resultado de ejercicios anteriores",
    },
  ];

export const GENERAL_ACCOUNTTYPE_LABELS: Record<string, string> =
  GENERAL_ACCOUNTTYPE_OPTIONS.reduce(
    (acc, opt) => {
      acc[opt.value] = opt.label;
      return acc;
    },
    {} as Record<string, string>,
  );

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

export const TAX_ACCOUNTTYPE_LABELS: Record<string, string> = {
  [TAX_ACCOUNTTYPE_OUTPUT]: "Impuesto trasladado / ventas",
  [TAX_ACCOUNTTYPE_INPUT]: "Impuesto acreditable / compras",
  [TAX_ACCOUNTTYPE_WITHHOLDING_RECEIVABLE]:
    "Retención a favor / que nos retienen",
  [TAX_ACCOUNTTYPE_WITHHOLDING_PAYABLE]:
    "Retención por pagar / que nosotros retenemos",
};

// Qué conceptos de cuenta mostrar según clas_tax del impuesto. Ninguno es
// obligatorio: un impuesto puede quedar sin ninguna cuenta configurada.
export const TAX_ACCOUNTTYPES_BY_CLAS: Record<string, string[]> = {
  [TAX_CLAS_RETENTION]: [
    TAX_ACCOUNTTYPE_WITHHOLDING_RECEIVABLE,
    TAX_ACCOUNTTYPE_WITHHOLDING_PAYABLE,
  ],
};

export const TAX_ACCOUNTTYPES_DEFAULT: string[] = [
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
export const PRODUCT_ACCOUNTTYPES_INVENTORIED: string[] =
  PROFILE_ACCOUNTTYPES_BY_PROFILETYPE[ACCOUNTPROFILE_TYPE_PRODUCT];

export const PRODUCT_ACCOUNTTYPES_SERVICE: string[] = [
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
