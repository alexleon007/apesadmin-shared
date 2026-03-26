import { VIEW_BOARD, VIEW_GALLERY, VIEW_TABLE } from "./consts";

// ─────────────────────────────────────────────────────────────────────────────
// SAMS
// ─────────────────────────────────────────────────────────────────────────────

export type Container = {
  id: string;
  name: string;
  image: string;
  status: string;
  state: string;
  created: number;
};

export type ContainersByServer = {
  serverId: string;
  serverName: string;
  containers: Container[];
  error?: string;
};

export type Server = {
  id: string;
  name: string;
  host: string;
  status: string;
  cpuUsage: number;
  memoryUsage: number;
  totalMemory: number;
  usedMemory: number;
  uptime: number;
  hostname: string;
  location: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// WHATSAPP — tipos del servicio raw (apesadmin-backend/src/utils/types.ts)
// ─────────────────────────────────────────────────────────────────────────────

export type WappRawChatType = {
  id: {
    server: string;
    user: string;
    _serialized: string;
  };
  name?: string; // solo para grupos
  isGroup: boolean;
  isReadOnly: boolean;
  unreadCount: number;
  timestamp: number;
  archived: boolean;
  pinned: boolean;
  isMuted: boolean;
  muteExpiration?: number;
  ephemeralExpiration?: number;
  groupMetadata?: {
    id: string;
    owner: string;
    subject: string;
    creation: number;
    participants: {
      id: string;
      isAdmin: boolean;
      isSuperAdmin: boolean;
    }[];
  };
  lastMessage?: WappRawMessageType;
};

export type WappRawMessageLocation = {
  latitude: number;
  longitude: number;
  description?: string;
  options: any;
};

export type WappRawMessageMedia = {
  data: string; // base64
  mimetype: string;
  filename?: string;
  filesize?: number;
};

export type WappRawMessageType = {
  id: {
    fromMe: boolean;
    remote: string;
    id: string;
    _serialized: string;
  };
  body: string;
  type:
    | "chat"
    | "image"
    | "video"
    | "audio"
    | "ptt"
    | "document"
    | "sticker"
    | "location"
    | "vcard"
    | string;
  timestamp: number;
  from: string;
  to: string;
  fromMe?: boolean;
  author?: string; // solo para grupos
  hasMedia: boolean;
  isForwarded: boolean;
  isStatus: boolean;
  isStarred: boolean;
  isGroupMsg: boolean;
  mentionedIds?: string[];
  quotedMsgId?: string;
  chatId: string;
  mediaKey?: string;
  filename?: string;
  mimetype?: string;
  ack: number; // 0 = pending, 1 = sent, 2 = received, 3 = read, 4 = played
  downloadMedia: () => Promise<WappRawMessageMedia>;
  location?: WappRawMessageLocation;
};

// ─────────────────────────────────────────────────────────────────────────────
// WHATSAPP — tipos del plugin WappConnect (frontend UI)
// ─────────────────────────────────────────────────────────────────────────────

export type WappChatListType = {
  idch: number;
  type: string;
  chatName: string;
  idnumber: string;
  number: string;
  unreadCount: number;
  timestamp: string;
  archived: boolean;
  pinned: boolean;
  isMuted: boolean | undefined;
  profilePicUrl: string;
  lastMessageOwner: boolean;
  lastMessageBody: string;
  lastMessageAck: number;
  lastMessageTimestamp: number;
  lastMessageType: string;
  avatar: "";
  labels: {
    id: string;
    hexColor: string;
    name: string;
  }[];
  schedules: {}[];
};

export type WappChatType = {
  idcb: string;
  author: string;
  fromMe: boolean;
  ack: number;
  body: string;
  hasMedia: boolean;
  type: string;
  mimetype: string;
  mediaUrl: string;
  location: {
    latitude: number;
    longitude: number;
    options: any;
  };
  timestamp: string;
  from: string;
  to: string;
};

export type WappQuickAnswerType = {
  idqa: number;
  qauserid: number;
  qashortcut: string;
  qaquickanswer: string;
};

export type WappScheduledMessage = {
  idsm: number;
  name: string;
  body: string;
  date: string;
  status: number;
};

export type WappTagType = {
  idtag: number;
  idwtag: string;
  tagname: string;
  tagcolor: string;
  custom: {
    custom: boolean;
    shareable: boolean;
    contactnumber: number;
  };
};

export type WappUserType = {
  iduser: number;
  username: string;
  name: string;
  mail: string;
  levelUser: number;
  whatsappSync: boolean;
  profileImage: string;
  loggedIn: boolean;
};

// ─────────────────────────────────────────────────────────────────────────────
// CFDI (apesadmin-backend/src/types/types.ts)
// ─────────────────────────────────────────────────────────────────────────────

export type CfdiDataType = {
  version: "4.0";
  serie: string;
  folio: string;
  fecha: string; // formato ISO: YYYY-MM-DDTHH:mm:ss
  noCertificado: string;
  certificado: string;
  sello: string;
  lugarExpedicion: string;
  formaPago: string;
  metodoPago: string;
  condicionesDePago?: string;
  tipoDeComprobante: "I" | "E" | "T" | "P" | "N";
  exportacion: string;
  subtotal: number;
  descuento?: number;
  total: number;
  moneda: "MXN" | "USD";
  tipoCambio?: number;
  emisor: {
    rfc: string;
    nombre: string;
    regimenFiscal: string;
  };
  receptor: {
    rfc: string;
    nombre: string;
    usoCFDI: string;
    domicilioFiscal: string;
    regimenFiscal: string;
  };
  conceptos: CFDIConceptoType[];
  impuestos?: {
    TotalImpuestosTrasladados?: number;
    TotalImpuestosRetenidos?: number;
    Traslados?: Array<{
      Base: number;
      Impuesto: string;
      TipoFactor: string;
      TasaOCuota: string;
      Importe: number;
    }>;
    Retenciones?: Array<{
      Impuesto: string;
      Importe: number;
    }>;
  };
  relacionados?: { tipoRelacion: string; uuids: string[] };
  informacionGlobal?: { periodicidad: string; meses: string; anio: string };
  comercioExterior?: boolean;
};

export type CFDIConceptoType = {
  ClaveProdServ: string;
  Cantidad: number;
  ClaveUnidad: string;
  Descripcion: string;
  ValorUnitario: number;
  Importe: number;
  Descuento?: number;
  ObjetoImp?: string;
  Impuestos?: {
    Traslados?: CFDIImpuestoType[];
    Retenciones?: CFDIImpuestoType[];
  };
};

export type CFDIImpuestoType = {
  Base: number;
  Impuesto: string;
  TipoFactor: string;
  TasaOCuota: string;
  Importe: number;
};

// ─────────────────────────────────────────────────────────────────────────────
// ERP — tipos compartidos (frontend + backend)
// ─────────────────────────────────────────────────────────────────────────────

export type ActionUserValueType = {
  enabled: boolean;
  scope?: "own" | "team" | "all";
  team?: number[];
};

export type HelpTicketType = {
  idht: number;
  idkmn: number;
  title: string;
  description: string;
  type: string;
  status: number;
  statusname: string;
  iduser: number;
  username: string;
  createdat: string;
  datestarted: string;
  datefinished: string;
};

// KmnListType unifica KMNLIST (sams) y KmnListType (frontend) — estructura idéntica
export type KmnListType = {
  idkmn: number;
  kmnuser: string;
  mail: string;
  vpsdir: string;
  createdat: string;
  status: number;
  bills: {
    idbill: number;
    docnumber: string;
    docdate: string;
    duedate: string;
    status: number;
    total: number;
    totaldue: number;
    obs: string;
  }[];
};

// ─────────────────────────────────────────────────────────────────────────────
// ERP — tipos del frontend (apesadmin-frontend/src/types/types.ts)
// ─────────────────────────────────────────────────────────────────────────────

export type AccountMovementType = {
  idmovement: number;
  idaccount: number;
  accountname: string;
  accountbank: string;
  type: string;
  doctype: string;
  concept: string;
  reference: string;
  class: string;
  subclass: string;
  amount: string;
  currency: string;
  tc: string;
  date: string;
  createdat: string;
  iddoc: number;
  iduser: number;
  username?: string;
  status: number;
  consec: string;
  cancelusername?: string;
  canceldate?: string;
  cancelobs?: string;
};

export type ActionFieldType = {
  key: string;
  type: "scope-select";
};

export type AddressType = {
  idaddress: number;
  addresstype: string;
  addressowner: number;
  addressname: string;
  address: string;
  cp: string;
  latlong: string;
};

export type APITokenType = {
  idapi?: number;
  apicode?: string;
  apiname?: string;
  apitoken?: string;
  apirefreshtoken?: string;
  apiuserid?: string;
  idcmp?: number | null;
  idwh?: number | null;
  idapit?: number;
  awsaccesskey?: string;
  awssecretkey?: string;
  sellerid?: string;
  marketplaceid?: string;
  region?: string;
};

export type ApisType = {
  id: number;
  code: string;
  name: string;
  description?: string;
  status: number;
};

export type AttachedFileType = {
  file: any;
  previewUrl: string;
  type: "image" | "pdf" | "other";
};

export type BankAccountType = {
  idaccount: number;
  idcmp: number;
  accountname: string;
  accountbank: string;
  account: string;
  accountcode: string;
  accoundcard: string;
  accountowner: string;
  accounttype: string;
  accountcolor: string;
  accountcurrency: string;
  accountcurrentamount: number;
  accountstatus: number;
  accountclassification?: string;
};

export type CalendarEventType = {
  idcaleve: number;
  name: string;
  code: string;
  color: string;
  isvisible: number;
};

export type CalendarType = {
  idcal: number;
  title: string;
  description: string;
  startdate: string;
  enddate: string;
  allday: boolean;
  typedoc: string;
  clas: string;
  iddoc: number;
  notes: string;
  color: string;
  status: number;
  statusname: string;
  isvisible: number;
};

export type CategoryType = {
  idcat: number;
  name_cat: string;
  description_cat: string;
  thumbnail_cat: string;
};

export type CicleCountingLogType = {
  idinvcdlog: number;
  idprod: number;
  prodcode: string;
  prodname: string;
  idunit: number;
  unitname: string;
  qtyoriginal: number;
  qtycounted: number;
  createdat: string;
};

export type CicleCountingType = {
  idinvc: number;
  idcmp: number;
  cmpname: string;
  idwh: number;
  whname: string;
  idwhloc: number;
  whlocname: string;
  iduser: number;
  status: number;
  statusname: string;
  createdat: string;
};

export type CompanyType = {
  idcmp: number;
  cmpname: string;
  cmptruename: string;
  cmprfc: string;
  cmpaddress: string;
  cmpcp: string;
  cmprf: number;
  cmptel: string;
  cmpemail: string;
  cmpsatcode: string;
  cmplogourl: string;
  cmplogotipourl: string;
  cmpiconourl: string;
  cmpsatkeyurl: string;
  cmpsatcerurl: string;
};

export type ConceptFieldsType = {
  idcfield: number;
  iskey: number;
  isviewable: number;
  isname: number;
  cfieldtype: string;
  cfieldcode: string;
  cfieldname: string;
  cfieldcols: number;
  cfieldorder: number;
  cfieldstatus: number;
  rowstart: boolean;
  options: {
    idcfieldo: number;
    code: string;
    name: string;
    order: number;
    status: number;
  }[];
};

export type ConceptFieldsValuesType = {
  idcfv: number;
  idconcept: number;
  fieldcode: string;
  fieldname: string;
  fvalue: string;
};

export type ConceptType = {
  idconcept: number;
  conceptidkmn: number;
  concepttype: string;
  conceptclas: string;
  conceptcode: string;
  conceptname: string;
  conceptkey: string;
  conceptunit: string;
  conceptstatus: number;
  conceptstatusname: string;
  fields: ConceptFieldsType[];
};

export type ConvertionFactorType = {
  idfactor: number;
  factorprod: number;
  factorprodname: string;
  factorunit1: number;
  factorunit1name: string;
  factorunit2: number;
  factorunit2name: string;
  factor: number;
};

export type DashboardConfigType = {
  order?: number;
  posX?: number;
  posY?: number;
  sizeX?: number;
  sizeY?: number;
  visible?: boolean;
};

export type DashboardWidgetType = {
  i: string;
  type: "welcome" | "quickActions" | "kpiGroup" | "report";
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  visible: boolean;
  reportId?: number;
  moduleRoute?: string;
};

export type ExamQuestionType = {
  idexq: number;
  qrytitle: string;
  qrydescription: string;
  qrytype: string;
  qrytime: number;
  qryvalue: number;
  qryfiles: string | any;
  options: any[];
  answered: number | null;
  answers: any[];
};

export type ExamType = {
  iduser?: number;
  username?: string;
  result?: string;
  userstartdate?: string | null;
  idex: number;
  name: string;
  description: string;
  thumbnail: string;
  startdate: string;
  enddate: string;
  status: number;
  createdat: string;
  questions: ExamQuestionType[];
};

export type ExpenseType = {
  idex: number;
  extype: string;
  excategory: number;
  excategoryname: string;
  exdocumentcode: string;
  exdocumentnumber: string;
  exsupplier: number;
  exsuppliername: string;
  exconcept: number;
  exconceptname: string;
  exticket: string;
  exlocation: string;
  expaymentmethod: string;
  exdate: string;
  extotal: number;
  exnewobs: string;
  exstatus: number;
  exstatusname: string;
  exiduser: number;
  exusername: string;
  excreatedat: string;
  extaxes: TaxType[];
};

export type ExternalUrlsType = {
  ideurl: number;
  type: string;
  contactinitialtype: number;
  code: string;
  name: string;
  description: string;
  forms: number[];
  expiration: string;
  expirationselect: number;
  origin: string;
  pricelist: number;
  phoneconfirmation: number;
  phoneconfirmationsave: number;
  url: string;
  createdat: string;
  finalmessage: string;
  company: number;
  role: string;
  showcalendar: boolean;
};

export type FamiliesType = {
  idfam: number;
  famname: string;
  famstatus: number;
  famstatusname: string;
};

export type GoodsReceiptDetailType = {
  idgrd: number;
  idprod: number;
  prodcode: string;
  prodname: string;
  idunit: number;
  unitname: string;
  orgquantity: number;
  finalquantity: number;
  grdisnew: number;
  prodbatch: number;
  prodexpiration: number;
  idbatch: number;
  batchname: string;
  expirationdate: string;
  grdstatus: number;
  grdstatusname: string;
};

export type GoodsReceiptType = {
  idgr: number;
  grtype: string;
  grtypename: string;
  idcmp: number;
  cmpname: string;
  griddoc: number;
  grdocname: string;
  gridorigin: number;
  groriginname: string;
  idwhdestination: number;
  whnamedestination: string;
  grdatearrival: string;
  grobsnew: string;
  grobsreceipt: string;
  griduserreceipt: number;
  grusernamereceipt: number;
  grstatus: number;
  grstatusname: string;
  grdetail: GoodsReceiptDetailType[];
};

export type GroupsType = {
  idgru: number;
  gruname: string;
  grustatus: number;
  grustatusname: string;
};

export type HubAdminType = {
  idhub: number;
  hubname: string;
  hubdescription: string;
  hubthumnail: string;
  hubcontent: HubContentType[];
  hubprice: number;
};

export type HubContentType = {
  idhubcontent: number;
  cname: string;
  cdescription: string;
  ctags: string[];
  ctype: string;
  cthumbnail: string;
  cfile: string;
  corder: number;
  cstatus: number;
};

export type HubType = {
  idhub: number;
  clas_hub: number;
  name_cat: string;
  name_hub: string;
  tagsString: string;
  tags_hub: string[];
  description_hub: string;
  filename_hub: string;
  size_hub: number;
  createdat_hub: string;
  status_hub: string;
  videoUrl: string;
  thumbnailUrl: string;
};

export type InventoryMovsType = {
  idmov: number;
  movdirection: string;
  idprod: number;
  prodname: string;
  idunit: number;
  unitname: string;
  idwh: number;
  whname: string;
  idcmp: number;
  cmpname: string;
  prodbatch: string;
  idbatch: number;
  batchname: string;
  prodexpiration: number;
  batchexpirationdate: string;
  batchorgquantity: number;
  movquantity: number;
  movconsec: string;
  movdate: string;
  movtype: number;
  movtypename: string;
  movref: string;
  movtypedoc: string;
  moviddoc: number;
  movdocname: string;
};

export type InventoryType = {
  idinv: number;
  idprod: number;
  prodname: string;
  idunit: number;
  unitname: string;
  idwh: number;
  whname: string;
  idcmp: number;
  cmpname: string;
  prodbatch: number;
  idbatch: number;
  batchname: string;
  prodexpiration: number;
  batchexpirationdate: string;
  batchorgquantity: number;
  invquantity: number;
  invstatus: number;
  statusname: string;
};

export type KpiItemType = {
  icon: any;
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
  color: string;
};

export type LogisticsRoutesType = {
  idroute: number;
  routecode: string;
  routenumber: number;
  routedate: string;
  routeidwh: number;
  routewhname: string;
  routewhcolor: string;
  routestatus: number;
  routestatusname: string;
  operators: {
    idrop: number;
    iduser: number;
    username: string;
    role: string;
  }[];
  stops: {
    idrst: number;
    idcmp: number;
    cmpname: string;
    iddoc: number;
    doccode: string;
    docnumber: number;
    typedoc: string;
    idcmerdoc: number;
    cmernamedoc: string;
    createdby: string;
    address: string;
    totaldoc: number;
    totalduedoc: number;
    time: string;
    duration: number;
    lat: number;
    long: number;
    stopstatus: number;
    stopstatusname: string;
    notes: string;
  }[];
  finished: boolean;
};

export type MailConfigType = {
  idmail: number;
  mailname: string;
  mailstring: string;
  mailsupplier?: string;
  mailhost?: string;
  mailport?: string | number;
  mailprotocol?: string;
  mailuser?: string | null;
  mailpassword?: string | null;
  status?: number;
  createdAt?: string | null;
};

export type ManufactureDetType = {
  idmand: number;
  title: string;
  description: string;
  type: number;
  doctype: number;
  iddoc: number;
  startdate: string;
  enddate: string;
  order: number;
  status: number;
  statusname: string;
  status2: number;
  status2name: string;
};

export type ManufactureType = {
  idman: number;
  doccode: string;
  docnumber: number;
  type: number;
  startdate: string;
  duedate: string;
  enddate: string;
  idcmp: number;
  cmpname: string;
  idwh: number;
  whname: string;
  manstatus: number;
  manstatusname: string;
  createdat: string;
  detail: ManufactureDetType[];
};

export type MenuItemType = {
  idmm: number;
  name_mm: string;
  link_mm: string;
  order_mm: number;
  fa_mm: string;
  type_mm: number;
  subMenus?: SubMenuItemType[];
};

export type MinMaxType = {
  idprod: number;
  minqty: number;
  maxqty: number;
};

export type ModalSizesType = "sm" | "m" | "lg" | "xl" | "fullscreen";

export type NotificationType = {
  idnot: number;
  idmm2: number;
  iduser: number;
  title: string;
  message: string;
  date: string;
  severity: "info" | "success" | "warning" | "danger";
  type: string;
  status: number;
  createdby: number;
  createdbyName: string;
  deletedat: string;
  createdat: string;
};

export type OptionType = { label: string; value: string };

export type OrderDetailType = {
  idord: number;
  idor: number;
  idprod: number;
  prodcode: string;
  prodname: string;
  produnit: number;
  produnitname: string;
  taxes: TaxType[];
  quantity: number;
  price: number;
  subtotal: number;
  total: number;
  obsRow?: string;
  section?: string;
};

export type OrderLogType = {
  idhistory: number;
  idstage: number;
  stageName: string;
  stageColor: string;
  date: string;
  user: string;
  comments: string;
  action: "forward" | "backward" | "created";
  event: null;
};

export type OrderMovementType = {
  idpayd: number;
  idpay: number;
  ormovtype: string;
  ormovnumber: string;
  ormovreference: string;
  ormovdate: string;
  ormovpayform: string;
  ormovcurrency: string;
  ormovexchangerate: number;
  ormovtotal: number;
  ormovtotalpayment: number;
  ormovstatus: number;
  ormovobs: string;
};

export type OrderType = {
  idor: number;
  ortype: number;
  typename: string;
  doccode: string;
  ordocnumber: string;
  ordocnumber2: string;
  idcmer: number;
  cmercode: string;
  cmername: string;
  oraddress: number;
  oraddressname: string;
  oraccount: number;
  oraccountname: string;
  orproject: number;
  orprojectname: string;
  orroute: number;
  pricelist: number;
  oridagent: number;
  oragent: string;
  idcmp: number;
  cmpname: string;
  idwh: number;
  whname: string;
  username: string;
  orstatus: number;
  orstatusname: string;
  ordeliverydate: string;
  ordate2: string;
  ordate: string;
  ordocdate: string;
  orduedate: string;
  orpriority: string;
  orpayterms: string;
  orpayform: string;
  orpaymethod: string;
  orcfdiuse: string;
  orcurrency: string;
  orexchangerate: number;
  orclas: string;
  orsubclas: string;
  orobsnew: string;
  orleyend: string;
  orsubtotal: number;
  ortaxes: number;
  orret: number;
  ortotal: number;
  ortotaldue: number;
  oridcot: number;
  oridped: number;
  oridcfdi: number;
  orxmlurl: string;
  ordetail: OrderDetailType[];
  orfields: ConceptFieldsValuesType[];
  ormovements?: OrderMovementType[];
  orlogs?: OrderLogType[];
};

export type PartyInboxType = {
  idinbox: number;
  inboxname: string;
  inboxdescription: string;
  datacount: number;
};

export type PartyLogType = {
  idpartylog: number;
  logidparty: number;
  statusinbox: string;
  lognotes: string;
  logfile: string;
  logcontactdate: string;
  logiduser: string;
  logusername: string;
  logcreatedat: string;
};

export type PartyType = {
  idparty: number;
  uuidparty: string;
  partycode: string;
  partyname: string;
  partytruename: string;
  partyrfc: string;
  partyrf: number;
  partyaddress: string;
  partycp: string;
  partyagent: number;
  partyagentname: string;
  partypricelist: number;
  partytel: string;
  partyemail: string;
  partytype: number;
  partytypename: string;
  partyzone: string;
  partyclas: string;
  partysubclas: string;
  partycreditdays: number;
  partycreditlimit: number;
  partyobs: string;
  partycsf: string;
  partyorigin: number;
  partyoriginname?: string;
  contacts: { name: string; position: string; tel1: string; email: string }[];
  addresses: { name: string; address: string; cp: string; latlong: string }[];
  partyrecord: RecordType[];
  partyfields: ConceptFieldsValuesType[];
  logs: PartyLogType[];
  partystatus: number;
  partystatusinbox: string;
  iscustomer: number;
  issupplier: number;
  isrh: number;
  partyphoto?: string;
  partypipelines?: {
    idpipe: number;
    pipeline: string;
    idpipestep: number | null;
    step: string | null;
    stepcolor: string | null;
    date: string | null;
    idpipeparty: number;
  }[];
  partytags?: TagType[];
};

export type PayFormType = {
  idpf: number;
  code: string;
  name: string;
  shortname: string;
  statuspos: number;
  statusorder: number;
  statuspo: number;
  commtypepos: number;
  commclaspos: number;
  commqtypos: number;
};

export type PaymentDetType = {
  idpayd?: number;
  iddoc: number;
  docnumber?: string;
  currency?: string;
  total?: number;
  totaldue?: number;
  totalpay?: number;
};

export type PaymentType = {
  idpay: number;
  paytype: string;
  idcmp: number;
  cmpname: string;
  idtarget: number;
  targetname: string;
  idpos?: number;
  paynumber: string;
  payreference: string;
  paydate: string;
  payform: string;
  paycurrency: string;
  payexchangerate: number;
  payobs: string;
  payevidence: string;
  paystatus: number;
  paystatusname: string;
  paytotal: number;
  paydocs: PaymentDetType[];
};

export type PipelineStepType = {
  idpipestep: number;
  stepname: string;
  stepcolor: string;
  steporder: number;
  stepstatus: number;
};

export type PipelineType = {
  idpipe: number;
  pipelinename: string;
  pipelinedescription: string;
  pipelinesteps: PipelineStepType[];
  partyInfo?: {
    idparty: number;
    currentStage: number;
    currentStageName: string;
    currentStageColor: string;
    history: Array<{
      idhistory: number;
      idstage: number;
      stageName: string;
      stageColor: string;
      date: string;
      user: string;
      comments: string;
      action: "forward" | "backward" | "created";
    }>;
  };
};

export type POSSessionType = {
  idpos: number;
  iduser: number;
  username: string;
  startdate: string;
  enddate: string;
  idcmp: number;
  cmpname: string;
  idwh: number;
  whname: string;
  pricelist: number;
  initialcash: number;
  initialobs: string;
  finalcash: number;
  finalobs: string;
  cashpayed: number;
  cashexpenses: number;
  cashdif: number;
  totalsale: number;
  totalpayed: number;
  expenses: number;
  posstatus: number;
  statusname: string;
  tickets: POSTicketType[];
};

export type POSTicketType = {
  idticket: number;
  idpos: number;
  docnumber: number;
  subtotal: number;
  taxes: number;
  retentions: number;
  total: number;
  totaldue: number;
  payform: number;
  iduser: number;
  username: string;
  cmername: string;
  agentname: string;
  canceluser: number;
  cancelusername: string;
  canceldate: string;
  createdat: string;
  ticketstatus: number;
  ticketstatusname: string;
  idwh: number;
  whname: string;
  payformsummary: {
    method: string;
    amount: number;
  }[];
  detail: {
    idtdet: number;
    idticket: number;
    idprod: number;
    prodname: string;
    idunit: number;
    unitname: string;
    quantity: number;
    price: number;
    taxes: TaxType[];
    subtotal: number;
    total: number;
  }[];
};

export type PriceListType = {
  idpl: number;
  listnumber: number;
  name: string;
};

export type ProcessType = {
  processTitle?: string;
  processSubtitle?: string;
  processDetails?: string;
  processDate?: string;
  processInventory?: string;
  processAgent?: string;
  processStatus?: string;
  processOrder?: number;
};

export type ProductType = {
  idprod: number;
  idcmp: number;
  cmpname: string;
  prodtypecode: string;
  prodtype: string;
  prodcode: string;
  prodname: string;
  proddescription: string;
  produnit: number;
  produnitname: string;
  prodclasificationcode: string;
  prodclasification: string;
  prodbarcode: string;
  prodfamily: number;
  prodfamilyname: string;
  prodgroup: number;
  prodgroupname: string;
  prodbatch: number;
  prodexpiration: number;
  prodprice1: number;
  prodprice2: number;
  prodprice3: number;
  prodprice4: number;
  prodprice5: number;
  prodprice6: number;
  costorep: number;
  costoprom: number;
  costocal: number;
  specsheeturl: string;
  prodcvesat: string;
  produnisat: string;
  prodfields: ConceptFieldsValuesType[];
  taxvalues: TaxValueType[];
  inventoryTracked: boolean;
  maxqty: number;
  minqty: number;
};

export type ProductVariableType = {
  variableid: number;
  variablename: string;
  variabletype: string;
  variableapi: string;
  variablevalue: number;
};

export type ProjectType = {
  idproject: number;
  projectname: string;
  projectcover: string;
  projectvideo: string;
  projectblueprint: string;
  projectdescription: string;
  projecturl: string;
  projectlongdescription: string;
  projectpropertytype: string;
  projectlatlong: string;
  projectrentpricetype: string;
  projectmaxpeople: number;
  projectfields: ConceptFieldsValuesType[];
  records: RecordType[];
  budgets: {
    idbudget: number;
    budgetclas: string;
    budgetsubclas: string;
    budgetdescription: string;
    budgetstatus: number;
    budgetvalue: number;
  }[];
  media: {
    idmedia: number;
    medianame: string;
    mediapath: string;
  }[];
  content?: OrderDetailType[];
};

export type PromotionPayloadType = {
  name: string;
  day:
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "saturday"
    | "sunday"
    | "all"
    | "weekends"
    | "weekdays"
    | string;
  startDate: string;
  endDate: string;
  startHour: string;
  endHour: string;
  discountType: "fixed" | "percent";
  discountValue: number;
  products: { idprod: number; prodcode: string }[];
  type: string;
  requirement: number;
  origin?: string;
};

export type PromotionsFormPropsType = {
  initialData?: any;
  onSaved?: () => void;
  modalMode: string;
};

export type PODetailType = {
  idpod: number;
  idpo: number;
  idprod: number;
  prodcode: string;
  prodname: string;
  produnit: number;
  produnitname: string;
  taxes: TaxType[];
  quantity: number;
  price: number;
  subtotal: number;
  total: number;
};

export type POType = {
  idpo: number;
  potype: number;
  podocnumber: string;
  podocnumber2: string;
  idsupp: number;
  suppcode: string;
  suppname: string;
  idcmp: number;
  cmpname: string;
  idwh: number;
  whname: string;
  poproject: number;
  username: string;
  postatus: number;
  postatusname: string;
  podate: string;
  podocdate: string;
  poduedate: string;
  idpos?: number;
  poconcept: string;
  popriority: string;
  popayterms: string;
  pocurrency: string;
  poexchangerate: number;
  pocontact: string;
  poaddress: string;
  poclas: string;
  posubclas: string;
  popaymethod: string;
  popayform: string;
  pocfdiuse: string;
  poobsnew: string;
  posubtotal: number;
  potaxes: number;
  poret: number;
  pototal: number;
  pototaldue: number;
  poevidence1: string;
  poaccount?: number;
  poaccountdest?: number;
  podetail: PODetailType[];
  pofunnel: number;
  pofields: ConceptFieldsValuesType[];
};

export type QuickActionType = {
  key: string;
  icon: any;
  label: string;
  path: string;
  category: string;
  state?: Record<string, unknown>;
  access: number[];
  actionKey?: string;
};

export type RecordType = {
  idrecord?: number;
  rocordparent?: number;
  recordiddoc?: number;
  recorddoctype?: string;
  recordmime?: string;
  recordtype: string;
  recordname: string;
  recordnotes?: string;
  recordplan?: string;
  recordfile?: string | any;
  recordstatus?: number;
  recordstatusname?: string;
  recordcreatedat?: string;
  section?: string;
  recordsection?: string;
};

export type RegimeType = {
  idreg: number;
  regcode: number;
  regname: string;
};

export type ReportsSQLType = {
  idrsql: number;
  type: string;
  code: string;
  name: string;
  filters: object;
  graphs: object;
};

export type ShortcutPrefType = {
  key: string;
  order: number;
  isvisible: number;
};

export type SubMenuItemType = {
  idmm2: number;
  idmm_mm2: number;
  name_mm2: string;
  link_mm2: string;
  order_mm2: number;
  access_menu: number;
  actions?: Record<string, { label: string; fields?: ActionFieldType[] }>;
  userActions?: Record<string, ActionUserValueType>;
  status_mm2: number;
};

export type SupplierType = {
  idsupp: number;
  suppcode: string;
  suppname: string;
  supprfc: string;
  supprf: number;
  suppaddress: string;
  suppcp: string;
  supptypecode: string;
  supptype: string;
  suppclas: string;
  suppsubclas: string;
  suppcreditdays: number;
  suppcreditlimit: number;
  contacts: { name: string; position: string; tel1: string; email: string }[];
  addresses: { name: string; address: string; cp: string; latlong: string }[];
  suppfields: ConceptFieldsValuesType[];
  supprecord: RecordType[];
  suppobs: string;
  suppstatus: number;
};

export type SystemSettingsType = {
  sw_cfdi: boolean;
  decimals: number;
  reserve_inventory_on_order: boolean;
  allow_orders_without_stock: boolean;
  inventory_deduction_on_invoice: boolean;
  pos_warehouse_mode: string;
  pos_pricelist_mode: string;
  pos_blind_cash_count: boolean;
  pos_self_billing: boolean;
  project_property_managment: boolean;
  inventory_addition_on_po: boolean;
  f_order_field_value_date1: string;
  f_order_field_show_date1: boolean;
  f_order_field_value_datetype1: string;
  f_order_field_value_date2: string;
  f_order_field_show_date2: boolean;
  f_order_field_value_payform: string;
  f_order_field_show_payform: boolean;
  f_order_field_value_paymethod: string;
  f_order_field_show_paymethod: boolean;
  f_order_field_show_cfdiuse: boolean;
  f_order_field_show_bankaccount: boolean;
  f_order_field_show_project: boolean;
  f_expense_field_show_folio: boolean;
  f_expense_field_show_supplier: boolean;
  f_expense_field_show_warehouse: boolean;
  f_expense_field_show_clas: boolean;
  f_expense_field_show_currency: boolean;
  f_expensereq_field_show_folio: boolean;
  f_expensereq_field_show_supplier: boolean;
  f_expensereq_field_show_warehouse: boolean;
  f_expensereq_field_show_clas: boolean;
  f_expensereq_field_show_currency: boolean;
  f_po_field_value_payform: string;
  f_po_field_show_payform: boolean;
  f_po_field_value_paymethod: string;
  f_po_field_show_paymethod: boolean;
  f_po_field_show_cfdiuse: boolean;
  f_po_field_show_conditions: boolean;
  f_po_field_show_deliverto: boolean;
  f_po_field_show_deliverin: boolean;
  f_po_field_show_date: boolean;
  f_po_field_show_project: boolean;
  f_cmer_field_show_pricelist: boolean;
  f_cmer_field_value_pricelist: number;
  f_cmer_field_show_type: boolean;
  f_cmer_field_value_type: number;
  f_cmer_field_show_group: boolean;
  f_cmer_field_show_address: boolean;
  f_cmer_field_show_cp: boolean;
  f_cmer_field_show_tel: boolean;
  f_cmer_field_show_email: boolean;
  f_cmer_field_show_creditday: boolean;
  f_cmer_field_show_creditlimit: boolean;
  f_cmer_field_show_zone: boolean;
  f_cmer_field_show_clas: boolean;
  f_cmer_field_show_subclas: boolean;
  f_cmer_field_show_origin: boolean;
  s_cmer_title_leyend: string;
  s_cot_pdf_leyend: string;
  s_ped_pdf_leyend: string;
  s_fac_pdf_leyend: string;
  s_ticket_pdf_leyend: string;
  pdf_template_1_es: boolean;
  pdf_template_2_es: boolean;
  pdf_template_3_es: boolean;
  pdf_template_1_en: boolean;
  pdf_template_2_en: boolean;
  pdf_template_3_en: boolean;
  pdf_template_default: string;
  airecord_record: string;
};

export type TagType = {
  idtag: number;
  tagname: string;
  tagcolor: string;
  tagdoctype: string;
};

export type TaxType = {
  idtax: number;
  taxentry: number;
  taxcode: string;
  taxname: string;
  taxporc: number;
  taxvalue: number;
  taxbase: number;
  taxorder: number;
  taxside: number;
  taxclas: string;
};

export type TaxValueType = {
  idtaxval: number;
  idtax: number;
  taxentry: number;
  taxcode: string;
  taxname: string;
  taxtype: string;
  taxiddoc: number;
  taxporc: number;
  taxvalue: number;
  taxbase: number;
  taxorder: number;
  taxside: number;
  taxclas: string;
};

export type ThemeType = {
  secondary: string;
  background: string;
  primaryText: string;
  secondaryText: string;
  complementary: string;
  disabled: string;
  [key: string]: string | number | boolean | undefined;
};

export type TicketDetail = {
  code: string;
  name: string;
  unit: string;
  quantity: number;
  price: number;
  subtotal: number;
  total: number;
};

export type TicketInfo = {
  idor: number;
  folio: string;
  docdate: string;
  subtotal: number;
  taxes: number;
  ret: number;
  total: number;
  customer: string;
  detail: TicketDetail[];
  regimes: { regcode: string; regname: string }[];
};

export type UnitType = {
  idunit: number;
  unitname: string;
};

export type UserType = {
  iduser: number;
  username: string;
  name: string;
  mail: string;
  tel: string;
  rol: string;
  type: number[];
  companies: number[];
  warehouses: number[];
  teammembers: number[];
  signedurl: string;
  profileimage: string;
  mailhost: string;
  mailport: string;
  mailsecure: string;
  mailauth: string;
  mailpass: string;
};

export type ViewType =
  | typeof VIEW_TABLE
  | typeof VIEW_BOARD
  | typeof VIEW_GALLERY;

export type WarehouseLocationType = {
  idwhloc: number;
  whlocidwh: number;
  whlocname: string;
  whloccolor: string;
};

export type WarehouseType = {
  idwh: number;
  whcode: string;
  whname: string;
  whtype: string;
  whclas: string;
  whsubclas: string;
  whaddress: string;
  whcp: string;
  whlatlong: string;
  whforsale: number;
  whlocations: object[];
  whstatus: string;
  whcolor: string;
};

export type WidgetPrefType = {
  key: string;
  order: number;
  isvisible: number;
};

export type WorkflowActionType = {
  wfActionId: number;
  wfActionKey: string;
  wfActionLabel: string;
  wfActionIcon: string;
  wfActionColor: string;
  wfActionCategory: string;
  wfActionParams: any;
};

export type WorkflowEdgeType = {
  wfEdgeId: number;
  wfId: number;
  wfEdgeSourceNodeId: number;
  wfEdgeTargetNodeId: number;
  wfEdgeLabel: string;
  wfEdgeKey: string | null;
  wfEdgeParams: any;
  wfEdgeConditions: any;
  wfEdgeSourceHandle?: string | null;
  wfEdgeTargetHandle?: string | null;
};

export type WorkflowNodeType = {
  wfNodeId: number;
  wfId: number;
  wfNodeKey: string | null;
  wfNodeNameKey?: string;
  wfNodeIconKey?: string;
  wfActionId: number;
  wfNodeParams: any;
  wfNodeUiPosition: any;
  wfEdges: WorkflowEdgeType[];
};

export type WorkflowType = {
  wfId: number;
  wfName: string;
  wfDescription?: string | null;
  wfCreatedAt: string;
  wfStatus: number;
  wfStatusName: string;
  wfNodes: WorkflowNodeType[];
  nodeCount?: number;
};

export type WorkItemsClasifType =
  | "project"
  | "sprint"
  | "task"
  | "ticket"
  | "block"
  | string;

export type WorkItemMemberType = {
  iduser: number;
  name: string;
  profileimage?: string;
  role: "owner" | "collaborator" | "watcher";
};

export type WorkItemsType = {
  idwi: number;
  witype: WorkItemsClasifType;
  wititle: string;
  widescription?: string;
  wicode?: string;
  widocnumber?: string;
  wiidwidad?: number | null;
  wipriority?: number;
  wistatus?: number;
  wistatusname?: string;
  wiprogress?: number;
  widuedate?: string;
  wistartdate?: string;
  wienddate?: string;
  wiidproject?: number | null;
  wiidcmp?: number | null;
  wiblocktype?: string;
  wiclas?: string;
  wisubclas?: string;
  wimodule?: string;
  wimembers?: WorkItemMemberType[];
  wiimages?: string[];
  wiloggedseconds?: number;
  wirunningat?: string | null;
  parentTitle?: string;
  parentType?: WorkItemsClasifType;
};

// ─────────────────────────────────────────────────────────────────────────────
// BIBLY (apesadmin-bibly/src/types/types.ts)
// ─────────────────────────────────────────────────────────────────────────────

export type BiblyExamOptionType = {
  text: string;
  correct: boolean;
};

export type BiblyExamQuestionType = {
  idexq: number;
  qrytitle: string;
  qrydescription: string;
  qrytype: "radio" | "checkbox" | "textarea";
  qrytime: number;
  qryvalue: number;
  qryfiles: string;
  options: BiblyExamOptionType[];
  answered?: number | null;
  answers?: any;
  next?: number | null;
  createdat?: string;
};

export type BiblyExamType = {
  idex: number;
  name: string;
  description: string;
  thumbnail: string;
  startdate: string | null;
  enddate: string | null;
  status: number;
  createdat: string;
  userstartdate?: string | null;
  questions: BiblyExamQuestionType[];
};

// BiblyHubType — versión Bibly del hub (distinta a HubType del ERP)
export type BiblyHubType = {
  idhub: number;
  hubname: string;
  hubdescription: string;
  hubthumnail: string;
  hubcontent: HubContentType[]; // misma estructura que HubContentType del ERP
  hubAccess: boolean;
  hubprice: number;
};

export type CheckoutMetadata = {
  userId?: string | number;
  orderId?: string | number;
  productIds?: string;
  source?: string;
  [key: string]: any;
};

export type CommentType = {
  id: number;
  user: string;
  text: string;
  date: string;
  authorId: number;
};

export type ProductItem = {
  productId: string | number;
  name: string;
  description?: string;
  price: number;
  quantity: number;
  images?: string[];
  metadata?: Record<string, any>;
};

// ─────────────────────────────────────────────────────────────────────────────
// REPORTS
// ─────────────────────────────────────────────────────────────────────────────

export type AggregationOperation = "sum" | "avg" | "count" | "min" | "max";

export type BarConfig = {
  dataKey: string;
  fill: string;
  name: string;
};

export type ChartAggregation = {
  column: string;
  operation: AggregationOperation;
  label: string;
};

export type ChartConfig = {
  xAxisKey: string;
  bars?: BarConfig[];
  lines?: LineConfig[];
  radars?: RadarConfig[];
  dataKey?: string;
  nameKey?: string;
};

export type ChartDataConfig = {
  groupBy: GroupByType;
  dateColumn?: string;
  groupColumn?: string;
  pivotColumn?: string;
  rowFilter?: RowFilter[];
  aggregations: ChartAggregation[];
};

export type ChartDefinition = {
  id: string;
  type: ChartType;
  title: string;
  dataConfig: ChartDataConfig;
  chartConfig: ChartConfig;
};

export type ChartType = "bar" | "line" | "pie" | "area" | "composed" | "radar";

export type ChatMessageType = {
  idchatme: number;
  chatmeowner: boolean;
  usernick?: string;
  chatmemessagetype: string;
  chatmebody: string;
  chatmestatus: number;
  chatmecreatedat: string;
};

export type ChatType = {
  idchat: number;
  chattype: "direct" | "group" | "channel" | "community_room";
  chattitle: string;
  chatdescription: string | null;
  chatavatar: string;
  lastmessageat: string | null;
  lastmessage?: string;
  lastmessageowner?: string;
  participants?: {
    idchatpa: number;
    iduser: number;
    nickname: string;
    role: string;
    profileimage?: string;
    unread?: number;
  }[];
  unread?: number;
};

export type FilterDefinition = {
  id: string;
  label: string;
  type: FilterType;
  placeholder?: string;
  defaultValue?: any;
  required?: boolean;
  cols?: number;
  key?: string;
  operator?: FilterOperator;
  options?: FilterOption[];
  apiEndpoint?: string;
  apiValueKey?: string;
  apiLabelKey?: string;
  isRange?: boolean;
  rangeStart?: string;
  rangeEnd?: string;
  isClearable?: boolean;
  formatOptionLabel?: string;
};

export type FilterOperator =
  | "="
  | "!="
  | ">"
  | ">="
  | "<"
  | "<="
  | "LIKE"
  | "IN"
  | "NOT IN";

export type FilterOption = {
  value: string | number;
  label: string;
};

export type FiltersConfig = {
  enabled: boolean;
  filters: FilterDefinition[];
};

export type FilterType =
  | "date"
  | "select"
  | "text"
  | "number"
  | "select-api"
  | "searchable-select"
  | "multi-select"
  | "multi-select-api";

export type FilterValues = {
  [key: string]: any;
};

export type GraphsConfig = {
  enabled: boolean;
  kpis?: KPIConfig[];
  charts: ChartDefinition[];
};

export type GroupByType = "day" | "week" | "month" | "year" | "column";

export type KPIConfig = {
  id: string;
  label: string;
  column: string;
  operation: AggregationOperation;
  format?: "number" | "currency" | "percentage" | "integer";
  prefix?: string;
  suffix?: string;
  color?: string;
  rowFilter?: RowFilter[];
};

export type LineConfig = {
  dataKey: string;
  stroke: string;
  name: string;
};

export type RadarConfig = {
  dataKey: string;
  stroke: string;
  fill: string;
  name: string;
};

export type RowFilter = {
  column: string;
  op: "=" | "!=" | "in" | "not_in";
  value: string | string[];
};

export type LogType = {
  idlog: number;
  logiduser: number;
  logdoctype: string;
  logiddoc: number;
  logeventname: string;
  logstatusprev: number;
  logstatusnext: number;
  logcomments: string | null;
  logcreatedat: string;
};

export type LogUserType = {
  name: string;
  profileimage?: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// OTHERS
// ─────────────────────────────────────────────────────────────────────────────

export type BootstrapColorsType =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "dark"
  | "secondary"
  | "default"
  | "light"
  | "link"
  | "outline-primary"
  | "outline-success"
  | "outline-danger"
  | "outline-warning"
  | "outline-info"
  | "outline-light"
  | "outline-dark"
  | "outline-secondary"
  | "record";

export type PageSizeType =
  | "A3"
  | "A4"
  | "A5"
  | "LETTER"
  | "LEGAL"
  | [number, number];

export type PageLayoutType = "portrait" | "landscape";

export type DocumentMetaType = {
  name: string;
  version: string;
  page: {
    size: PageSizeType;
    layout?: PageLayoutType;
    margin?:
      | number
      | { top: number; right: number; bottom: number; left: number };
  };
};

export type ElementTypeType =
  | "image"
  | "text"
  | "line"
  | "circle"
  | "group"
  | "table";

export type BaseElementType = {
  type: ElementTypeType;
  x?: number;
  y?: number;
  visibleIf?: string;
};

export type TextStyleType = {
  fontFamily?: string;
  fontSize?: number;
  color?: string;
};

export type ImageElementType = BaseElementType & {
  type: "image";
  src: string;
  width?: number;
  height?: number;
  fit?: "contain" | "cover" | "scale-down";
};

export type TextElementType = BaseElementType &
  TextStyleType & {
    type: "text";
    text: string;
    width?: number;
    align?: "left" | "center" | "right" | "justify";
  };

export type LineElementType = BaseElementType & {
  type: "line";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  lineWidth?: number;
  lineColor?: string;
};

export type CircleElementType = BaseElementType & {
  type: "circle";
  radius: number;
  fillColor?: string;
  strokeColor?: string;
  lineWidth?: number;
};

export type TableElementType = BaseElementType &
  TextStyleType & {
    type: "table";
    width?: number;
    data: string; // dot-notation path into data object, e.g. "order.items"
    paginate?: boolean;
    repeatHeader?: boolean;
    columns: TableColumnType[];
  };

export type GroupElementType = BaseElementType & {
  type: "group";
  elements: DocumentElementType[];
};

export type DocumentElementType =
  | ImageElementType
  | TextElementType
  | LineElementType
  | CircleElementType
  | GroupElementType
  | TableElementType;

export type PDFTemplateDefType = {
  meta: DocumentMetaType;
  defaults?: DocumentDefaultsType;
  elements: DocumentElementType[];
};

export type DocumentDefaultsType = {
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: "normal" | "bold" | "italic" | "bold-italic";
  color?: string;
  lineWidth?: number;
  lineColor?: string;
};

export type TableColumnType = {
  key: string;
  title: string;
  width?: number;
  align?: "left" | "center" | "right";
  format?: "number" | "currency" | "date" | string;
};

type Base = { _id: string; visibleIf?: string };

export type EditorTextType = Base & {
  type: "text";
  x?: number;
  y?: number;
  text: string;
  fontFamily?: string;
  fontSize?: number;
  color?: string;
  align?: "left" | "center" | "right" | "justify";
  width?: number;
};

export type EditorImageType = Base & {
  type: "image";
  x?: number;
  y?: number;
  src: string;
  width?: number;
  height?: number;
  fit?: "contain" | "cover" | "scale-down";
};

export type EditorLineType = Base & {
  type: "line";
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  lineWidth?: number;
  lineColor?: string;
};

export type EditorCircleType = Base & {
  type: "circle";
  x?: number;
  y?: number;
  radius: number;
  fillColor?: string;
  strokeColor?: string;
  lineWidth?: number;
};

export type EditorTableType = Base & {
  type: "table";
  x?: number;
  y?: number;
  data: string;
  columns: TableColumnType[];
  width?: number;
  paginate?: boolean;
  repeatHeader?: boolean;
};

export type EditorElementType =
  | EditorTextType
  | EditorImageType
  | EditorLineType
  | EditorCircleType
  | EditorTableType;

export type BuilderStateType = {
  elements: EditorElementType[];
  selectedId: string | null;
  defaults: DocumentDefaultsType;
};

export type ActionType =
  | { type: "ADD"; element: EditorElementType }
  | { type: "MOVE"; id: string; x: number; y: number }
  | { type: "UPDATE"; id: string; patch: Partial<EditorElementType> }
  | { type: "DELETE"; id: string }
  | { type: "SELECT"; id: string | null }
  | { type: "SET_DEFAULTS"; patch: Partial<DocumentDefaultsType> }
  | {
      type: "RESET";
      elements: EditorElementType[];
      defaults: DocumentDefaultsType;
    };
