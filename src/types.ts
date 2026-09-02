import { VIEW_BOARD, VIEW_GALLERY, VIEW_TABLE } from "./consts";

// ─────────────────────────────────────────────────────────────────────────────
// SAMS
// ─────────────────────────────────────────────────────────────────────────────

export type Container = {
  id: string;
  name: string;
  image: string;
  imageId?: string;
  status: string;
  state: string;
  created: number;
  ports?: number[];
  exitCode?: number | null;
  tenantName?: string;
};

export type ContainerStats = {
  id: string;
  name: string;
  memUsage: number;
  memLimit: number;
  memPerc: string;
  cpuPerc?: string;
  blockRead?: number;
  blockWrite?: number;
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

/**
 * Inbox omnicanal (APIs de Meta).
 *
 * Cloud API no expone historial: el backend guarda cada mensaje que entra por
 * webhook y cada uno que sale, y estas son las formas que devuelve. Nada aquí
 * es específico de WhatsApp — Instagram y Messenger usan los mismos tipos con
 * otro valor en `channel`.
 */
export type ChannelKeyType = "whatsapp" | "instagram" | "messenger";

export type ChannelAccountType = {
  idca: number;
  name: string;
  provider: string;
  channel: string;
  /** phone_number_id (WhatsApp), IG user id o page id. */
  externalId: string;
  businessId: string;
  displayName: string;
  lastcheck: string | null;
  lasterror: string;
  status: number;
  /**
   * Color de identificacion de ESTA cuenta, `#rrggbb`, o '' para ninguno.
   *
   * No es el color del canal — ese ya lo pone la marca en el icono. Este
   * distingue dos cuentas del mismo canal, que de otro modo comparten icono,
   * color y fila.
   */
  color: string;
  /** 1 = ya tiene token guardado. El token nunca viaja al frontend. */
  hasToken: number;
};

export type ChannelConversationType = {
  idcc: number;
  idca: number;
  channel: string;
  accountName: string;
  /** Color de la cuenta, denormalizado para no pedir la lista de cuentas. */
  accountColor: string;
  /** wa_id / IGSID / PSID del contacto. */
  externalId: string;
  name: string;
  /** URL firmada de nuestro bucket, regenerada en cada lectura. '' = ninguna. */
  avatar: string;
  idparty: number;
  lastMessage: string;
  lastMessageType: string;
  /** 1 = el último mensaje lo mandamos nosotros. */
  lastMessageOwner: number;
  lastMessageAt: string | null;
  /**
   * Ultimo mensaje ENTRANTE. De aqui sale la ventana de 24 h.
   *
   * Va aparte de `lastMessageAt` porque son cosas distintas: contestar mueve
   * el ultimo mensaje pero NO reabre la ventana. Solo la reabre que escriba
   * el contacto. Usar `lastMessageAt` dejaria la bandeja diciendo que se
   * puede escribir libre justo despues de cada respuesta nuestra, que es
   * exactamente cuando no se puede.
   *
   * null = nunca escribio: nunca hubo ventana.
   */
  lastInboundAt: string | null;
  unread: number;
  archived: number;
  pinned: number;
};

/**
 * Adjunto de un mensaje, ya descargado de Meta y guardado por nosotros.
 *
 * Meta borra los archivos del webhook a los 30 dias y su URL exige el token
 * de la cuenta, asi que no sirve para pintar un <img>. El archivo se baja una
 * sola vez al recibirlo y se guarda en la tabla `media` (table_media =
 * 'channel_messages', idtarget_media = idcm); lo que viaja al frontend es una
 * URL firmada temporal, regenerada en cada lectura.
 */
export type ChannelMediaType = {
  idmedia: number;
  /** Nombre original si el canal lo manda; si no, uno derivado del tipo. */
  name: string;
  mime: string;
  /** Bytes. 0 = el canal no lo informo. */
  size: number;
  /** URL firmada de GCS. Caduca: no guardarla ni cachearla. */
  url: string;
};

export type ChannelMessageType = {
  idcm: number;
  idcc: number;
  externalId: string;
  /** 1 = saliente. */
  owner: number;
  type: string;
  body: string;
  payload: Record<string, any>;
  /** sent | delivered | read | failed | received */
  status: string;
  error: string;
  sentAt: string;
  /** null = mensaje sin adjunto, o adjunto que no se pudo descargar. */
  media?: ChannelMediaType | null;
};

/**
 * Contrato agnóstico de canal (lo consume el backend).
 *
 * Todo lo que entra por el webhook de Meta se normaliza a estas formas ANTES
 * de tocar la base de datos, así que agregar Instagram significa escribir un
 * adaptador nuevo, no tocar el controlador, el store ni la UI.
 */

/** Contraparte humana de la conversación (wa_id, IGSID, PSID). */
export type NormalizedContactType = {
  externalId: string;
  name: string;
};

/**
 * Referencia a un adjunto tal como viene en el webhook: todavia no hay bytes.
 * El adaptador la extrae de su propio formato; quien la descarga es el
 * backend, que es el unico que tiene el token de la cuenta.
 */
export type NormalizedMediaRefType = {
  /** Id del archivo en Meta. Caduca a los 30 dias. */
  externalId: string;
  /**
   * URL directa al archivo, cuando el canal la manda en vez de un id.
   *
   * WhatsApp entrega un media id que hay que canjear en Graph; Instagram y
   * Messenger entregan ya la URL del CDN dentro de `attachments[].payload`.
   * Son dos formas de descarga distintas, no dos nombres del mismo dato: si
   * viene `url` se baja de ahi y `externalId` queda vacio.
   */
  url?: string;
  /** Puede venir vacio: Graph lo confirma al pedir la metadata. */
  mime: string;
  /** Solo los documentos traen nombre; el resto se deriva del tipo. */
  filename: string;
};

export type NormalizedMessageType = {
  /** Id de la cuenta receptora en Meta: phone_number_id / ig id / page id. */
  accountExternalId: string;
  contact: NormalizedContactType;
  /** Id del mensaje en Meta (wamid...). Vacío = no deduplicable. */
  externalId: string;
  /** 1 = salió de nosotros, 0 = lo mandó el contacto. */
  owner: 0 | 1;
  type: string;
  body: string;
  payload: Record<string, any>;
  sentAt: Date;
  status: string;
  /** Adjunto pendiente de descargar. Ausente = mensaje sin media. */
  media?: NormalizedMediaRefType | null;
  /**
   * Id de la WhatsApp Business Account, tomado de `entry.id` del webhook.
   *
   * No se pide en el alta porque no hace falta para recibir ni para enviar:
   * el webhook resuelve por phone_number_id y los envios cuelgan del numero.
   * Solo las PLANTILLAS viven en el WABA, y ese id no se puede deducir del
   * numero — Graph no expone el campo. Asi que se recoge de aqui, que es el
   * unico sitio donde Meta lo regala.
   *
   * Ausente en los canales que no son WhatsApp.
   */
  accountBusinessId?: string;
};

/**
 * Acuse de recibo de un mensaje saliente (sent → delivered → read | failed).
 *
 * WhatsApp identifica el mensaje acusado por su id (`externalId`). Messenger
 * e Instagram no siempre: el evento `read` no trae ids, trae una marca de
 * agua — "todo lo que le mandé a este contacto hasta este instante ya lo
 * leyó". Por eso el acuse admite las dos formas y quien lo aplica decide:
 * con `externalId` se actualiza un mensaje, con `watermark` un rango.
 */
export type NormalizedStatusType = {
  accountExternalId: string;
  /** Vacio en los acuses por marca de agua. */
  externalId: string;
  status: string;
  error: string;
  /** Contraparte del chat acusado. Sólo en acuses por marca de agua. */
  contactExternalId?: string;
  /** Instante hasta el que aplica el acuse. Sólo en acuses por marca de agua. */
  watermark?: Date;
};

/**
 * Edición de un mensaje ya enviado.
 *
 * Instagram deja editar un DM y avisa por `message_edit`, con el MISMO `mid`
 * y el texto nuevo. No es un mensaje aparte: si se tratara como tal, cada
 * corrección de dedo dejaría una burbuja duplicada en el chat.
 *
 * Puede llegar de un mensaje que nunca vimos —la cuenta se dio de alta
 * después, o el webhook estuvo caído—, así que quien la aplica tiene que
 * poder insertarla y no sólo actualizar.
 */
export type NormalizedEditType = {
  accountExternalId: string;
  /** PSID / IGSID de la contraparte: sin él no hay conversación a la que ir. */
  contactExternalId: string;
  /** `mid` del mensaje editado. Es la llave contra `externalid_cm`. */
  externalId: string;
  body: string;
  /** 1 = editamos nosotros, 0 = editó el contacto. */
  owner: 0 | 1;
  editedAt: Date;
  payload: Record<string, any>;
};

export type ParsedWebhookType = {
  messages: NormalizedMessageType[];
  statuses: NormalizedStatusType[];
  /** Ausente en los canales que no admiten edición (WhatsApp Cloud). */
  edits?: NormalizedEditType[];
};

export type ChannelSendTextParamsType = {
  accountExternalId: string;
  accessToken: string;
  to: string;
  body: string;
};

export type ChannelSendTextResultType = {
  externalId: string;
  error?: string;
  /**
   * Id del contacto tal y como lo tiene Meta, cuando la respuesta del envio
   * lo trae.
   *
   * No siempre coincide con lo que se marco. WhatsApp normaliza el numero
   * —Mexico es el caso conocido: se escribe `521...` y Meta responde y manda
   * los webhooks con `52...`— y la conversacion se empareja por ese id. Sin
   * esto, escribir primero a un numero abria un chat con la forma marcada y
   * la respuesta del contacto abria OTRO con la forma de Meta.
   *
   * Vacio o ausente significa que el canal no lo informa: quien llama se
   * queda con el destino que uso.
   */
  contactExternalId?: string;
};

/**
 * Envio de un adjunto.
 *
 * `url` es una URL publica temporal NUESTRA, no una ruta del disco: los tres
 * canales de Meta descargan el archivo ellos mismos desde donde se les diga.
 * Por eso el adjunto se guarda primero en nuestro almacenamiento y lo que
 * viaja a Meta es un enlace firmado.
 *
 * El camino alterno —subir los bytes a `/{phone_number_id}/media` en WhatsApp
 * y a `/me/message_attachments` en Messenger— son dos formatos distintos, deja
 * el archivo solo en Meta (que lo borra a los 30 dias) y obligaria a bajarlo
 * de vuelta para pintar la burbuja. Con el enlace hay un solo camino para los
 * tres canales y el archivo queda de nuestro lado, que es lo que la burbuja
 * necesita para pintarse igual que un adjunto recibido.
 */
export type ChannelSendMediaParamsType = {
  accountExternalId: string;
  accessToken: string;
  to: string;
  /** image | video | audio | document. */
  type: string;
  /** URL publica temporal desde la que Meta baja el archivo. */
  url: string;
  /** Pie de foto. Vacio = sin pie; no todos los canales lo admiten. */
  caption: string;
  filename: string;
  mime: string;
};

/**
 * Plantilla aprobada de WhatsApp.
 *
 * Fuera de la ventana de 24 h Cloud API rechaza cualquier mensaje libre, y lo
 * unico que deja pasar es una plantilla que Meta haya aprobado antes. No se
 * pueden crear al vuelo: se redactan en el Administrador de WhatsApp, pasan
 * revision y solo entonces se pueden enviar.
 *
 * Es un concepto de WhatsApp y de nadie mas. Messenger e Instagram tienen su
 * propia ventana de 24 h pero no plantillas: alli lo que existe son etiquetas
 * de mensaje, que son otra cosa y no se piden a Graph asi.
 */
export type ChannelTemplateType = {
  name: string;
  /** Codigo de idioma de Meta: es_MX, en_US. Va junto al nombre al enviar. */
  language: string;
  /** MARKETING | UTILITY | AUTHENTICATION. */
  category: string;
  /**
   * Texto del cuerpo tal cual lo aprobo Meta, con sus `{{1}}` sin sustituir.
   * Es lo que se previsualiza y de donde salen los huecos a rellenar.
   */
  body: string;
  /** Cuantos `{{n}}` tiene el cuerpo. 0 = se envia sin parametros. */
  variables: number;
  /** Texto de la cabecera si es de texto; '' si no tiene o es de archivo. */
  header: string;
  /** TEXT | IMAGE | VIDEO | DOCUMENT | LOCATION | '' cuando no hay cabecera. */
  headerType: string;
  /** Cuantos `{{n}}` tiene la cabecera de texto. */
  headerVariables: number;
  footer: string;
  /** Rotulos de los botones, solo para previsualizar. */
  buttons: string[];
  /**
   * Por que NO se puede enviar desde aqui, o '' si se puede.
   *
   * Una plantilla con cabecera de imagen exige que el envio adjunte esa
   * imagen, y una con boton dinamico exige el valor del boton. Enviarlas sin
   * eso no manda un mensaje incompleto: Graph rechaza el envio entero. Se
   * listan igualmente, con el motivo a la vista, porque ocultarlas dejaria al
   * usuario buscando en la bandeja una plantilla que si existe en Meta.
   */
  unsupported: string;
};

export type ChannelTemplateListParamsType = {
  /** Id del WABA. Las plantillas cuelgan de ahi, no del numero. */
  businessId: string;
  accessToken: string;
};

export type ChannelSendTemplateParamsType = {
  accountExternalId: string;
  accessToken: string;
  to: string;
  name: string;
  language: string;
  /** Valores de los `{{n}}` del cuerpo, en orden. */
  variables: string[];
  /** Valores de los `{{n}}` de la cabecera de texto, en orden. */
  headerVariables: string[];
};

export type ChannelProbeParamsType = {
  accountExternalId: string;
  accessToken: string;
};

export type ChannelProbeResultType = {
  displayName: string;
  businessId: string;
  detail: Record<string, any>;
};

export type ChannelProfileParamsType = {
  accountExternalId: string;
  accessToken: string;
  /** PSID / IGSID del contacto. */
  contactExternalId: string;
};

export type ChannelProfileResultType = {
  /** Vacío = Graph no lo devolvió; se conserva lo que ya hubiera. */
  name: string;
  /**
   * URL de la foto de perfil en el CDN de Meta.
   *
   * No se guarda tal cual: Meta la firma y caduca en días, así que un <img>
   * apuntando ahí funciona hoy y sale roto la semana que viene. El archivo se
   * baja y se queda en nuestro bucket, igual que los adjuntos.
   *
   * Vacío = el contacto no tiene foto, o el canal no la entrega.
   */
  avatar: string;
};

export type ChannelAdapterType = {
  channel: ChannelKeyType;
  /**
   * Valor del campo `object` del webhook que le pertenece a este canal.
   * Meta manda "whatsapp_business_account" | "instagram" | "page".
   */
  webhookObject: string;
  parseWebhook(body: any): ParsedWebhookType;
  sendText(
    params: ChannelSendTextParamsType,
  ): Promise<ChannelSendTextResultType>;
  /**
   * Envia un adjunto. No es opcional: los tres canales de Meta lo soportan, y
   * dejarlo opcional trasladaria el fallo de un canal sin implementar al
   * momento de pulsar el clip en vez de a la compilacion.
   */
  sendMedia(
    params: ChannelSendMediaParamsType,
  ): Promise<ChannelSendTextResultType>;
  /** Valida credenciales contra Graph y devuelve cómo se llama la cuenta. */
  probe(params: ChannelProbeParamsType): Promise<ChannelProbeResultType>;
  /**
   * Nombre y foto del contacto, para los canales cuyo webhook no los manda.
   *
   * WhatsApp no implementa esto, y no por olvido: la Cloud API entrega el
   * nombre en cada evento y NO expone la foto de perfil de nadie: no hay
   * endpoint que la dé. Ahí la lista se queda con la inicial.
   *
   * Instagram y Messenger sólo mandan el id, así que sin esta llamada la
   * lista de chats muestra PSIDs de 16 dígitos y ni una cara. Es opcional
   * porque cuesta una petición a Graph, y quien la define asume que se llama
   * una vez por conversación, no una por mensaje.
   */
  fetchProfile?(
    params: ChannelProfileParamsType,
  ): Promise<ChannelProfileResultType>;
  /**
   * Plantillas aprobadas de la cuenta.
   *
   * Solo WhatsApp. Es opcional y no un metodo vacio en los demas porque el
   * frontend pregunta al adaptador si el canal tiene plantillas antes de
   * ofrecer el boton: con una lista vacia no podria distinguir "este canal no
   * tiene plantillas" de "las tiene pero ninguna aprobada", y son dos avisos
   * distintos para el usuario.
   */
  listTemplates?(
    params: ChannelTemplateListParamsType,
  ): Promise<ChannelTemplateType[]>;
  /** Envia una plantilla. Va con listTemplates: quien tiene una tiene la otra. */
  sendTemplate?(
    params: ChannelSendTemplateParamsType,
  ): Promise<ChannelSendTextResultType>;
};

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
  // Sólo la usa la factura global: referencia el/los folio(s) de las
  // operaciones (tickets/notas) que ampara el concepto agregado.
  NoIdentificacion?: string;
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

export type CFDIDoctoRelacionadoType = {
  idDocumento: string;
  folio: string;
  monedaDR: string;
  equivalenciaDR?: number;
  numParcialidad: number;
  impSaldoAnt: number;
  impPagado: number;
  impSaldoInsoluto: number;
  objetoImpDR: "01" | "02";
  impuestosDR?: {
    traslados?: CFDIImpuestoType[];
    retenciones?: CFDIImpuestoType[];
  };
};

export type CfdiPagoDataType = {
  version: "4.0";
  serie: string;
  folio: string;
  fecha: string;
  noCertificado: string;
  certificado: string;
  sello: string;
  lugarExpedicion: string;
  exportacion: string;
  emisor: {
    rfc: string;
    nombre: string;
    regimenFiscal: string;
  };
  receptor: {
    rfc: string;
    nombre: string;
    usoCFDI: "CP01";
    domicilioFiscal: string;
    regimenFiscal: string;
  };
  pago: {
    fechaPago: string;
    formaDePagoP: string;
    monedaP: string;
    tipoCambioP?: number;
    monto: number;
    doctosRelacionados: CFDIDoctoRelacionadoType[];
    impuestosP?: {
      traslados?: CFDIImpuestoType[];
      retenciones?: CFDIImpuestoType[];
    };
  };
};

// ─────────────────────────────────────────────────────────────────────────────
// ERP — tipos compartidos (frontend + backend)
// ─────────────────────────────────────────────────────────────────────────────

export type ActionUserValueType = {
  enabled: boolean;
  scope?: "own" | "team" | "all";
  team?: number[];
};

export type ClockType = "in" | "break_start" | "break_end" | "out";
export type ClasificationsType = {
  idclas: number;
  name: string;
  type: string;
  level: number;
  color: string;
  status: number;
};
export type AttendanceStatusType = "idle" | "working" | "onBreak";

export type AccountingAccountType = {
  idacc: number;
  idcmp: number;
  code: string;
  name: string;
  type: string;
  nature: string;
  idparent: number;
  level: number;
  allowsmovements: number;
  satgroupcode: string;
  /** Clasificacion para el Estado de Resultados. Ver STMT_GROUP_OPTIONS. */
  stmtgroup: string;
  currency: string;
  status: number;
  createdat?: string;
};

export type AccountingProfileType = {
  idaccprof: number;
  idcmp: number;
  code: string;
  name: string;
  type: string;
  status: number;
  accountscount?: number;
};

export type AccountingProfileDetailType = AccountingProfileType & {
  accounts: Record<string, number>;
};

export type AccountingEntityAccountType = {
  idaccentity: number;
  idcmp: number;
  entitytype: string;
  idtarget: number;
  accounttype: string;
  idaccount: number;
  status: number;
  iduser?: number;
  createdat?: string;
  updatedat?: string;
};

export type AccountingTaxCatalogType = {
  idtax: number;
  code: string;
  name: string;
  clas: string;
  order: number;
};

// ---- Polizas contables ----
export type AccountingEntryType = {
  idaccent: number;
  idcmp: number;
  /** diario | ingresos | egresos */
  type: string;
  serie: string;
  /** Folio consecutivo; 0 mientras es borrador. */
  number: number;
  date: string;
  concept: string | null;
  /** '' (manual) | orders | purchaseorders | payments | inventory_movs */
  doctype: string;
  iddoc: number;
  /** manual | auto */
  source: string;
  currency: string;
  exchangerate: number;
  totaldebit: number;
  totalcredit: number;
  /** 0 borrador | 1 contabilizada | -2 cancelada */
  status: number;
  /** idaccent de la poliza que esta reversa; 0 si no es reversa. */
  idreverses?: number;
  /** true si esta poliza ya tiene una reversa contabilizada. */
  reversed?: boolean;
  iduser?: number;
  canceliduser?: number;
  canceldate?: string | null;
  cancelobs?: string | null;
  createdat?: string;
  updatedat?: string;
};

export type AccountingEntryDetType = {
  idaccentd?: number;
  idaccount: number;
  code?: string;
  name?: string;
  debit: number;
  credit: number;
  concept: string;
  idthird?: number;
  thirdtype?: string;
  thirdname?: string;
  order: number;
};

export type AccountingEntryDetailType = AccountingEntryType & {
  partidas: AccountingEntryDetType[];
};

// ---- Balanza de comprobacion ----
export type TrialBalanceRowType = {
  idacc: number;
  code: string;
  name: string;
  type: string;
  nature: string;
  idparent: number;
  level: number;
  allowsmovements: number;
  stmtgroup: string;
  depth: number;
  hasChildren: boolean;
  hasActivity: boolean;
  openingDebit: number;
  openingCredit: number;
  periodDebit: number;
  periodCredit: number;
  closingDebit: number;
  closingCredit: number;
  openingBalance: number;
  closingBalance: number;
};

export type TrialBalanceResponseType = {
  period: { dateFrom: string; dateTo: string };
  rows: TrialBalanceRowType[];
  totals: {
    openingDebit: number;
    openingCredit: number;
    periodDebit: number;
    periodCredit: number;
    closingDebit: number;
    closingCredit: number;
  };
  balanced: boolean;
};

export type AccountLedgerMovementType = {
  idaccent: number;
  folio: string;
  type: string;
  date: string;
  concept: string;
  doctype: string;
  iddoc: number;
  debit: number;
  credit: number;
  balance: number;
};

// ---- Libros contables ----
export type JournalEntryType = {
  idaccent: number;
  folio: string;
  type: string;
  date: string;
  concept: string;
  totaldebit: number;
  totalcredit: number;
  lines: {
    code: string;
    name: string;
    concept: string;
    debit: number;
    credit: number;
  }[];
};

export type LedgerAccountType = {
  idacc: number;
  code: string;
  name: string;
  nature: string;
  openingBalance: number;
  closingBalance: number;
  totalDebit: number;
  totalCredit: number;
  movements: AccountLedgerMovementType[];
};

// ---- Polizas recurrentes ----
export type AccountingRecurringLine = {
  idaccount: number;
  debit: number;
  credit: number;
  concept: string;
};

export type AccountingRecurringType = {
  idaccrec: number;
  idcmp: number;
  name: string;
  type: string;
  concept: string | null;
  dayofmonth: number;
  nextrun: string;
  lastrun: string | null;
  lines: AccountingRecurringLine[];
  status: number;
};

// ---- Estados financieros ----
export type StatementLineType = {
  idacc: number;
  code: string;
  name: string;
  amount: number;
};

export type StatementSectionType = {
  key: string;
  total: number;
  accounts: StatementLineType[];
};

export type IncomeStatementResponseType = {
  period: { dateFrom: string; dateTo: string };
  sections: Record<string, StatementSectionType>;
  subtotals: {
    totalRevenue: number;
    totalCostOfSales: number;
    grossProfit: number;
    totalOperatingExpense: number;
    operatingProfit: number;
    totalOtherIncome: number;
    totalOtherExpense: number;
    totalFinancialIncome: number;
    totalFinancialExpense: number;
    financialResult: number;
    profitBeforeTax: number;
    totalIncomeTax: number;
    netProfit: number;
  };
  unclassified: StatementLineType[];
  hasData: boolean;
};

export type BalanceSheetResponseType = {
  dateAs: string;
  fiscalYearStart: string;
  sections: Record<string, StatementSectionType>;
  netResult: number;
  totals: {
    totalAsset: number;
    totalLiability: number;
    totalEquity: number;
    totalLiabilityEquity: number;
    difference: number;
  };
  balanced: boolean;
  hasData: boolean;
};

export type PartyAttendanceType = {
  idassist: number;
  assisttype: ClockType;
  assistattendance: string;
  assistworkdate: string;
  assistidparty: number;
  assistdate: string;
  assistnotes: string;
  assistiduser: number;
  assiststatus: number;
  assistcreatedat: string;
  assistsessionuuid: string | null;
  assistlatitude: number | null;
  assistlongitude: number | null;
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
  expiration?: string;
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
  accountusers?: number[];
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
  cmpfielcerurl?: string;
  cmpfielkeyurl?: string;
  cmphasfielpass?: number;
  cmpdefaultcurrency: string;
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
  fexpiration?: string;
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

export type ConnectionStatusType = "connected" | "server-down" | "offline";

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
  dbId?: number;
  type:
    | "welcome"
    | "quickActions"
    | "kpiGroup"
    | "report"
    | "attendance"
    | "myTickets";
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  visible: boolean;
  reportId?: number;
  moduleRoute?: string;
  config?: {
    chartIndex?: number;
    filters?: Record<string, any>;
  };
};

export type StaticEntryType = {
  kind: "static";
  type: string;
  title: string;
  desc: string;
  category: string;
  icon: any;
  color: string;
};

export type ReportEntryType = {
  kind: "report";
  reportId: number;
  title: string;
  category: string;
  icon: any;
  color: string;
  instanceCount: number;
  anyVisible: boolean;
};

export type CatalogEntryType = StaticEntryType | ReportEntryType;

export type DashboardWidgetInstanceType = {
  iddashwidget: number;
  widgettype: string;
  idtarget: number;
  config: Record<string, any>;
  orderpos: number;
  isvisible: number;
};

export type StaticWidgetType = {
  kind: "static";
  type: DashboardWidgetType["type"];
  title: string;
  desc: string;
  category: string;
  icon: { prefix: any; iconName: any };
  color: string;
};

export type ReportWidgetType = {
  kind: "report";
  widgetId: string;
  title: string;
  category: string;
  icon: { prefix: any; iconName: any };
  color: string;
};

export type CatalogWidgetEntryType = StaticWidgetType | ReportWidgetType;

export type DepartmentType = {
  idept: number;
  idcmp: number;
  cmpname?: string;
  deptname: string;
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

export type PosSessionCashType = {
  idposcash: number;
  idpos: number;
  cashtype: string;
  denomination: number;
  quantity: number;
  total: number;
  date: string;
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
  prodcode: string;
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
  labelKey: string;
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
    idwh: number;
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
    proditems: { prodname: string; quantity: number; produnitname: string }[];
    orfields: ConceptFieldsValuesType[];
  }[];
  finished: boolean;
};

/**
 * Cara publica de una cuenta de correo. `mailpassword` y `smtppassword` son de
 * solo escritura (formulario -> servidor); el servidor nunca los devuelve, para
 * eso estan `haspassword` / `hassmtppassword`.
 */
export type MailConfigType = {
  idmail: number;
  mailname: string;
  mailstring: string;
  mailsupplier?: string;
  mailuser?: string | null;
  fromname?: string;
  imaphost?: string;
  imapport?: number;
  imapsecurity?: MailSecurityType;
  smtphost?: string;
  smtpport?: number;
  smtpsecurity?: MailSecurityType;
  smtpuser?: string;
  allowinvalidcert?: 0 | 1;
  haspassword?: 0 | 1;
  hassmtppassword?: 0 | 1;
  hastoken?: 0 | 1;
  hasaccess?: 0 | 1;
  canmanage?: 0 | 1;
  mailusers?: number[];
  mailpassword?: string | null;
  smtppassword?: string | null;
  lastcheck?: string | null;
  lasterror?: string;
  status?: number;
  createdAt?: string | null;
};

export type MailFolderType =
  "INBOX" | "SENT" | "DRAFTS" | "TRASH" | "SPAM" | "ARCHIVE";

export type MailSecurityType = "ssl" | "starttls" | "none";

export type MailAttachmentMetaType = {
  filename: string;
  mimeType: string;
  size: number;
  attachmentId: string;
};

export type MailMessageType = {
  /** Id del proveedor: gmail `messageId` | imap `uidValidity.uid`. */
  id: string;
  /** Cabecera RFC `Message-ID`, la que enhebra una respuesta. */
  messageId?: string;
  references?: string[];
  from: string;
  to: string;
  cc?: string;
  subject: string;
  snippet: string;
  body: string;
  htmlBody?: string;
  date: string;
  labelIds: string[];
  attachments: MailAttachmentMetaType[];
  blockedImages?: number;
};

export type MailListResultType = {
  emails: MailMessageType[];
  nextPageToken: string | null;
  total: number;
};

export type MailSearchCriteriaType = {
  text?: string;
  from?: string;
  subject?: string;
  unreadOnly?: boolean;
  since?: string;
};

export type MailSendOptionsType = {
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  text?: string;
  attachments?: Array<{
    filename: string;
    contentBase64: string;
    contentType?: string;
  }>;
  inReplyTo?: string;
  references?: string[];
};

export type MailChannelTestType = { ok: boolean; errorKey?: string };

/** Que canales prueba /mail/test-connection. */
export type MailTestChannelType = "imap" | "smtp" | "both";

export type MailTestResultType = {
  ok: boolean;
  imap: MailChannelTestType;
  smtp: MailChannelTestType;
};

export type MailErrorKeyType =
  | "mailErrAuth"
  | "mailErrDisabled"
  | "mailErrHost"
  | "mailErrSender"
  | "mailErrTls"
  | "mailErrTimeout"
  | "mailErrUnknown";

export type MailAttachmentDataType = {
  filename: string;
  mimeType: string;
  size: number;
  data: string;
};

export type MailMessageRefType = {
  id: string;
  folder?: MailFolderType;
};

export type MailAttachmentRefType = MailMessageRefType & {
  attachmentId: string;
};

export type MailListOptionsType = {
  folder?: MailFolderType;
  maxResults?: number;
  cursor?: string | null;
  criteria?: MailSearchCriteriaType;
};

/** Textos ya traducidos que el servicio de correo necesita para lanzar errores. */
export type MailMessagesType = {
  invalidHost: string;
  notFound: string;
  folderChanged: string;
  timeout: string;
  attachmentTooLarge: string;
  invalidAttachment: string;
  invalidRecipient: string;
  tooManyRecipients: string;
  sendNotSupported: string;
  unsupportedSupplier: string;
};

/** Contrato comun de Gmail e IMAP. Lo cumple lo que devuelve getMailProvider(). */
export type MailProviderType = {
  kind: "gmail" | "imap";
  list: (opts: MailListOptionsType) => Promise<MailListResultType>;
  detail: (opts: MailMessageRefType) => Promise<MailMessageType>;
  send: (opts: MailSendOptionsType) => Promise<{ messageId: string }>;
  markRead: (opts: MailMessageRefType) => Promise<void>;
  markUnread: (opts: MailMessageRefType) => Promise<void>;
  trash: (opts: MailMessageRefType) => Promise<void>;
  attachment: (opts: MailAttachmentRefType) => Promise<MailAttachmentDataType>;
  folders: () => Promise<MailFolderType[]>;
  testConnection: (opts?: {
    channel?: MailTestChannelType;
  }) => Promise<MailTestResultType>;
};

/** Solo backend: lleva credenciales descifradas. Nunca serializar al cliente. */
export type MailAccountEndpointType = {
  host: string;
  port: number;
  security: MailSecurityType;
  user: string;
  pass: string;
  allowInvalidCert: boolean;
};

/** Solo backend: lleva credenciales descifradas. Nunca serializar al cliente. */
export type MailAccountType = {
  idmail: number;
  displayName: string;
  fromName: string;
  address: string;
  supplier: string;
  imap: MailAccountEndpointType;
  smtp: MailAccountEndpointType;
  token: string;
};

export type MailAccountRowType = {
  idmail: number;
  name_mail: string;
  mail_mail: string;
  supplier_mail: string;
  user_mail: string;
  pass_mail: string;
  token_mail: string;
  status_mail: number;
  [key: string]: any;
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
  quantityassorted?: number;
  /** Cantidad ya convertida a un documento posterior (venta parcial). */
  quantitysold?: number;
  price: number;
  pricelist?: number;
  subtotal: number;
  total: number;
  obsRow?: string;
  section?: string;
  /** Sólo vienen cuando se pide get-orders con withlocations. */
  prodgroupname?: string;
  prodlocations?: ProductLocationType[];
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
  iddetdoc: number;
  idmaindoc: number;
  ormovtype: string;
  ormovtypename: string;
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
  orstatusinbox?: string;
  orisassorted?: number;
  /** 1 si alguna partida ya se vendió (total o parcialmente). */
  orhaspartial?: number;
  /** 1 si el CFDI se timbra como factura global (público en general). */
  orisglobal?: number;
  /** c_Periodicidad del SAT (01-05). Sólo con orisglobal = 1. */
  orglobalperiod?: string;
  /** c_Meses del SAT (01-12 meses, 13-18 bimestres). Sólo con orisglobal = 1. */
  orglobalmonths?: string;
  /** Año del periodo facturado. Sólo con orisglobal = 1. */
  orglobalyear?: string;
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

// Un contacto se captura a mano o se relaciona con un party existente
// (idparty > 0): el party autorrellena los campos al darlo de alta, pero los
// valores guardados son los del formulario y siguen siendo editables.
export type ContactType = {
  name: string;
  position: string;
  tel1: string;
  email: string;
  idparty?: number;
  partycode?: string;
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
  contacts: ContactType[];
  addresses: {
    name: string;
    address: string;
    cp: string;
    latlong: string;
    references: string;
  }[];
  partyrecord: RecordType[];
  partyfields: ConceptFieldsValuesType[];
  logs: PartyLogType[];
  partystatus: number;
  partystatusinbox: string;
  iscustomer: number;
  issupplier: number;
  isrh: number;
  partydepartment?: number;
  partydepartmentname?: string;
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
  partycreatedat?: string | null;
  partylat?: string;
  partylng?: string;
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
  idcfdi?: number;
  paycfdiuuid?: string;
  paycfdixmlurl?: string;
  stampedamount?: number;
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
  remainingcash: number;
  cashpayed: number;
  cashexpenses: number;
  cashdif: number;
  totalsale: number;
  totalpayed: number;
  expenses: number;
  posstatus: number;
  statusname: string;
  tickets: POSTicketType[];
  payformAccounts: Record<string, number>;
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
  prodsubgroup: number;
  prodsubgroupname: string;
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
  unitPrices: {
    idunit: number;
    unitname: string;
    pricelist: number;
    pricelistname: string;
    price: number;
  }[];
  units: {
    idunit: number;
    unitname: string;
    factor: number;
    isbase: boolean;
  }[];
  prodfields: ConceptFieldsValuesType[];
  taxvalues: TaxValueType[];
  inventoryTracked: boolean;
  pricePerUnit: boolean;
  prodbarcodes: BarcodeType[];
  prodlocations: ProductLocationType[];
  /** Existencia total (solo cantidades positivas). La manda get-products. */
  prodstock?: number;
  maxqty: number;
  minqty: number;
};

export type ProductLocationType = {
  idprodloc: number;
  idprod: number;
  idwh: number;
  whname: string;
  idwhloc: number;
  whlocname: string;
  qty: number;
};

export type AssortionDetailType = {
  idad: number;
  idprod: number;
  prodcode: string;
  prodname: string;
  produnit: number;
  produnitname: string;
  quantity: number;
  orderquantity: number;
};

export type AssortionRelatedDoc = {
  iddoc: number;
  docnumber: string;
  type: number;
  quantity: number;
};

export type AssortionType = {
  idassort: number;
  assortnumber: string;
  ordernumber?: string;
  idcmp: number;
  cmpname: string;
  idwh: number;
  whname: string;
  party: number;
  partyname: string;
  assortdate: string;
  assortobs: string;
  assortuser?: string;
  status: number;
  statusname: string;
  createdat: string;
  assortdetail: AssortionDetailType[];
  relatedDocs: AssortionRelatedDoc[];
};

export interface ReceptionType {
  idrecep: number;
  recepnumber: string;
  idcmp: number;
  cmpname: string;
  idwh: number;
  whname: string;
  idwhloc?: number;
  party: number;
  partyname: string;
  recepdate: string;
  recepobs: string;
  status: number;
  statusname: string;
  createdat: string;
  evidence: string;
  recepdetail: any[];
  selectedDocs: any[];
}

export type InvOrderRow = {
  idassort: number;
  assortnumber: string;
  cmpname: string;
  whname: string;
  partyname: string;
  assortdate: string;
  statusname: string;
};

export type UnitRow = {
  idunit: number;
  unitname: string;
  satcode: string;
  productCount: number;
};

export type ConflictProduct = {
  idprod: number;
  prodcode: string;
  prodname: string;
};

export type ProductMediaType = {
  idmedia: number;
  name: string;
  ext: string;
  size: number;
  createdat: string;
  url: string;
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
  qtyrecived?: number;
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
  supprfc?: string;
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
  podeliverydate?: string;
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
  pocredit?: number;
  podetail: PODetailType[];
  pofunnel: number;
  pofields: ConceptFieldsValuesType[];
};

export type CurrencyType = {
  idcur: number;
  curcode: string;
  curname: string;
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

export type CascadeDiscountProduct = {
  idprod: number;
  prodcode: string;
  prodname: string;
};

export type CascadeDiscount = {
  idpromo: number;
  name: string;
  mode: "authorized" | "open";
  tier1: number[];
  tier2: number[];
  openMin: number;
  openMax: number;
  openCascade: boolean;
  products: CascadeDiscountProduct[];
};

export type OrderDetailWithDiscount = OrderDetailType & {
  discount?: number;
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
  recordexpiration?: string;
  section?: string;
  recordsection?: string;
  recordfields?: {
    idconcept: number;
    fieldcode: string;
    fvalue: string;
    fieldname?: string;
    fexpiration?: string;
  }[];
  recordfieldfiles?: Record<string, { file: any; expiration?: string }>;
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
  contacts: ContactType[];
  addresses: {
    name: string;
    address: string;
    cp: string;
    latlong: string;
    references: string;
  }[];
  suppfields: ConceptFieldsValuesType[];
  supprecord: RecordType[];
  suppobs: string;
  suppstatus: number;
};

export type SystemSettingsType = {
  sw_cfdi: boolean;
  decimals: number;
  orders_pricelist_mode: string;
  price_list_by_line: boolean;
  reserve_inventory_on_order: boolean;
  allow_orders_without_stock: boolean;
  inventory_deduction_on_invoice: boolean;
  assign_agents_on_order: boolean;
  assign_operators_on_order: boolean;
  pos_warehouse_mode: string;
  pos_pricelist_mode: string;
  pos_blind_cash_count: boolean;
  pos_docnumber_capture: boolean;
  pos_self_billing: boolean;
  project_property_managment: boolean;
  inventory_addition_on_po: boolean;
  inventory_movement_on_transfer: boolean;
  inventory_picking_mode: string;
  inventory_picking_scanner_only?: boolean;
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
  f_order_field_value_statusinbox: string;
  f_order_field_show_statusinbox: boolean;
  f_order_field_default_credit: number;
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
  // null = el impuesto no aplica; 0 = aplica a tasa cero
  taxporc: number | null;
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
  // null = el impuesto no aplica; 0 = aplica a tasa cero
  taxporc: number | null;
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
  /** type_or del documento: 3 = nota, 4 = ticket */
  doctype: number;
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
  party_type?: number;
  idprofile?: number;
  idparty?: number;
};

export type ProfileType = {
  idprofile: number;
  name: string;
  description: string;
  status: number;
};

export type ViewType =
  typeof VIEW_TABLE | typeof VIEW_BOARD | typeof VIEW_GALLERY;

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
  "project" | "sprint" | "task" | "ticket" | "block" | string;

export type WorkItemMemberType = {
  iduser: number;
  idparty?: number;
  username?: string;
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
  wiimagemimes?: string[];
  wiloggedseconds?: number;
  wirunningat?: string | null;
  parentTitle?: string;
  parentType?: WorkItemsClasifType;
  idchat?: number | null;
  wiidclas?: number | null;
  wiclasname?: string;
  wiclascolor?: string;
  wisprintnames?: string;
  wiprojectname?: string;
  wicmpname?: string;
  wicreatedat?: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// PUBLIC PORTAL (apesadmin-frontend/src/pages/Public*.tsx)
// ─────────────────────────────────────────────────────────────────────────────

export type PublicServiceKeyType =
  "calendar" | "cfdi" | "ticket" | "account" | "chat";

export type PublicNavItemType = {
  key: PublicServiceKeyType;
  // Clave i18n: la lista vive a nivel de módulo, fuera de cualquier componente,
  // así que la traduce quien la pinta.
  labelKey: string;
  icon: any;
  color: string;
  requiresAuth?: boolean;
};

export type PublicBackendDataType = {
  url: string;
  protocol: string;
};

// Perfil del usuario público (respuesta de /open/me y /open/update-profile)
export type PublicUserInfoType = {
  username: string;
  mail: string;
  name?: string;
  tel?: string;
};

// Ticket en la lista del usuario público (respuesta de /open/my-tickets)
export type PublicTicketType = {
  wiid: number;
  wicode: string;
  widocnumber: number;
  wititle: string;
  wistatus: number;
  statusname: string;
  wiclas: string;
  wisubclas: string;
  wipriority: number;
  widescription: string;
  contactname: string | null;
  contactemail: string | null;
  contacttel: string | null;
  imagecount: number;
  createdat: string;
  updatedat: string;
  unread?: number;
};

// Mensaje de la conversación de un ticket (respuesta de /open/ticket-messages)
export type PublicTicketMessageType = {
  id: number;
  type: string;
  body: string | null;
  sender: string;
  isInternal?: boolean;
  createdat: string;
};

// Chat del portal público (respuesta de /open/my-chats y /open/start-ticket-chat)
export type PublicChatType = {
  idchat: number;
  idwi: number | null;
  title: string;
  status: number | null;
  lastmessage: string | null;
  lastmessageat: string | null;
  unread?: number;
};

// Evento/slot de calendario. Unifica el EventType de
// apesadmin-frontend/src/hooks/useCalendarEventModal.ts (re-exportado allí)
// y el de PublicCalendarForm. Forma laxa para mantener compatibilidad en ambos.
export type CalendarSlotEventType = {
  id: number;
  title: string;
  start: Date | string | null;
  end: Date | string | null;
  allDay?: boolean;
  resourceId?: number | null;
  original?: any;
  type?: string;
};

// Franja horaria disponible en PublicCalendarForm
export type PublicTimeSlotType = {
  time: string;
  available: boolean;
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
  isactive: number;
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
  groupColumns?: string[]; // Multiple columns → composite key on X-axis (overrides groupColumn)
  pivotColumn?: string;
  rowFilter?: RowFilter[];
  aggregations: ChartAggregation[];
  sortBy?: { key: string; dir: "asc" | "desc" };
  limit?: number;
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
  chattype: "direct" | "group" | "channel" | "community_room" | "aura";
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
  // filtros "date": muestra un check "Fecha actual" que fija el valor al token $today
  todayToggle?: boolean;
};

export type FilterOperator =
  "=" | "!=" | ">" | ">=" | "<" | "<=" | "LIKE" | "IN" | "NOT IN";

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

export type PDFTemplateType = {
  idtemplate: number;
  name: string;
  definition: any;
  type: string;
  favorite: number;
  createdat: string;
};

export type PageSizeType =
  | "A3"
  | "A4"
  | "A5"
  | "LETTER"
  | "LEGAL"
  | "TICKET_58"
  | "TICKET_80"
  | [number, number];

export type PageLayoutType = "portrait" | "landscape";

export type DocumentMetaType = {
  name: string;
  version: string;
  page: {
    size: PageSizeType;
    layout?: PageLayoutType;
    margin?:
      number | { top: number; right: number; bottom: number; left: number };
    autoHeight?: boolean;
  };
};

export type ElementTypeType =
  | "image"
  | "text"
  | "line"
  | "circle"
  | "group"
  | "table"
  | "pagenum"
  | "qr"
  | "currentdate";

export type BaseElementType = {
  type: ElementTypeType;
  x?: number;
  y?: number;
  visibleIf?: string;
  showOn?: "all" | "first" | "last";
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

export type ImageGridElementType = {
  type: "image_grid";
  x?: number;
  y?: number;
  data: string;
  columns?: number;
  cellWidth?: number;
  cellHeight?: number;
  gap?: number;
  visibleIf?: string;
  showOn?: "all" | "first" | "last";
};

export type TextElementType = BaseElementType &
  TextStyleType & {
    type: "text";
    text: string;
    width?: number;
    align?: "left" | "center" | "right" | "justify";
    lineBreak?: boolean;
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
    rowsPerPage?: number; // 0 or undefined = let pdfkit handle overflow
    expandConcepts?: boolean; // when true, split "concepts" cell by ", " → one line per concept
    columns: TableColumnType[];
  };

export type PageNumElementType = BaseElementType &
  TextStyleType & {
    type: "pagenum";
    template?: string; // e.g. "Página {{current}} de {{total}}"
    align?: "left" | "center" | "right";
    width?: number;
  };

export type GroupElementType = BaseElementType & {
  type: "group";
  elements: DocumentElementType[];
};

export type QRElementType = BaseElementType & {
  type: "qr";
  value: string;
  size?: number;
};

export type CurrentDateElementType = BaseElementType & {
  type: "currentdate";
  format?: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  align?: "left" | "center" | "right";
  width?: number;
};

export type DocumentElementType =
  | ImageElementType
  | TextElementType
  | LineElementType
  | CircleElementType
  | GroupElementType
  | TableElementType
  | PageNumElementType
  | QRElementType
  | CurrentDateElementType;

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
  // Texto congelado al añadir la columna. Es lo que se imprime si no hay
  // titleKey (plantillas anteriores a i18n) o si el usuario lo editó a mano.
  title: string;
  // Clave i18n de la cabecera. Si está, el generador de PDF la traduce al
  // idioma de la petición; se borra en cuanto el usuario escribe su propio
  // título, para que su texto siempre gane.
  titleKey?: string;
  width?: number;
  align?: "left" | "center" | "right";
  format?: "number" | "currency" | "date" | string;
  wrap?: boolean;
  headerFontSize?: number;
  fontSize?: number;
};

type Base = {
  _id: string;
  visibleIf?: string;
  showOn?: "all" | "first" | "last";
};

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
  lineBreak?: boolean;
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
  fontFamily?: string;
  fontSize?: number;
  paginate?: boolean;
  repeatHeader?: boolean;
  rowsPerPage?: number;
  expandConcepts?: boolean;
};

export type EditorPageNumType = Base & {
  type: "pagenum";
  x?: number;
  y?: number;
  template?: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  align?: "left" | "center" | "right";
  width?: number;
};

export type EditorQRType = Base & {
  type: "qr";
  x?: number;
  y?: number;
  value: string;
  size?: number;
};

export type EditorCurrentDateType = Base & {
  type: "currentdate";
  x?: number;
  y?: number;
  format?: string;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  align?: "left" | "center" | "right";
  width?: number;
};

export type EditorElementType =
  | EditorTextType
  | EditorImageType
  | EditorLineType
  | EditorCircleType
  | EditorTableType
  | EditorPageNumType
  | EditorQRType
  | EditorCurrentDateType;

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

export type FieldDef = { key: string; label: string };
export type FieldGroup = { group: string; fields: FieldDef[] };

export type NCFormType = "dev" | "bon" | "ant";

export type NormalizedDocType = {
  id: number;
  docnumber: string;
  currency: string;
  docdate: string;
  duedate: string;
  total: number;
  totaldue: number;
  partnerid: number;
  cmpid: number;
  status: number;
};

export type ReturnItemType = {
  iddoc: number;
  docnumber: string;
  iddetail: number;
  idprod: number;
  prodcode: string;
  prodname: string;
  produnitname: string;
  originalQty: number;
  price: number;
  taxes: any[];
  returnQty: string;
};

// ---------------------------------------------------------------------------
// Columnas disponibles para la tabla de renglones del documento (ordetail)
// ---------------------------------------------------------------------------

export type DetailColumnDef = {
  key: string; // campo real en el objeto de cada renglón — uso interno
  title: string; // título por defecto de la columna en el PDF
  format?: "currency" | "number" | "date";
};

export type DetailColumnGroup = {
  group: string;
  columns: DetailColumnDef[];
};

const OR_DETAIL_COLUMNS: DetailColumnGroup[] = [
  {
    group: "Producto",
    columns: [
      { key: "prodcode", title: "Código" },
      { key: "prodname", title: "Producto / Concepto" },
      { key: "produnitname", title: "Unidad" },
      { key: "section", title: "Sección" },
    ],
  },
  {
    group: "Cantidad y precio",
    columns: [
      { key: "quantity", title: "Cantidad", format: "number" },
      { key: "price", title: "Precio unitario", format: "currency" },
      { key: "discount", title: "Descuento", format: "currency" },
      { key: "subtotal", title: "Subtotal", format: "currency" },
      { key: "total", title: "Total", format: "currency" },
    ],
  },
  {
    group: "Otros",
    columns: [{ key: "obsRow", title: "Observaciones" }],
  },
];

export const DETAIL_COLUMNS_BY_TYPE: Record<string, DetailColumnGroup[]> = {
  cot: OR_DETAIL_COLUMNS,
  ped: OR_DETAIL_COLUMNS,
  fac: OR_DETAIL_COLUMNS,
  note: OR_DETAIL_COLUMNS,
  pos: [],
};

const OR_FIELDS: FieldGroup[] = [
  {
    group: "Documento",
    fields: [
      { key: "doc_codigo", label: "Código del documento" },
      { key: "doc_numero", label: "Número del documento" },
      { key: "doc_fecha_creacion", label: "Fecha de creación" },
      { key: "doc_fecha", label: "Fecha del documento" },
      { key: "doc_vencimiento", label: "Fecha de vencimiento" },
      { key: "doc_estatus", label: "Estatus" },
      { key: "doc_prioridad", label: "Prioridad" },
      { key: "doc_observaciones", label: "Observaciones" },
      { key: "doc_leyenda", label: "Leyenda" },
      { key: "doc_clasificacion", label: "Clasificación" },
      { key: "doc_subclasificacion", label: "Subclasificación" },
    ],
  },
  {
    group: "Cliente",
    fields: [
      { key: "cliente_nombre", label: "Nombre del cliente" },
      { key: "cliente_rfc", label: "RFC del cliente" },
      { key: "cliente_cp", label: "C.P. del cliente" },
      { key: "cliente_codigo", label: "Código del cliente" },
      { key: "cliente_referencia", label: "Referencia del cliente" },
    ],
  },
  {
    group: "Empresa",
    fields: [
      { key: "empresa_nombre", label: "Nombre de la empresa" },
      { key: "empresa_telefono", label: "Teléfono de la empresa" },
      { key: "empresa_rfc", label: "RFC de la empresa" },
      { key: "empresa_cp", label: "C.P. de la empresa" },
      { key: "empresa_referencia", label: "Referencia de la empresa" },
      { key: "empresa_codigo_sat", label: "Código SAT de la empresa" },
      { key: "empresa_logo", label: "Logo de la empresa" },
    ],
  },
  {
    group: "Pago",
    fields: [
      { key: "pago_condiciones", label: "Condiciones de pago" },
      { key: "pago_forma", label: "Forma de pago" },
      { key: "pago_metodo", label: "Método de pago" },
      { key: "pago_uso_cfdi", label: "Uso CFDI" },
      { key: "pago_moneda", label: "Moneda" },
      { key: "pago_tipo_cambio", label: "Tipo de cambio" },
    ],
  },
  {
    group: "Totales",
    fields: [
      { key: "total_subtotal", label: "Subtotal" },
      { key: "total_impuestos", label: "Impuestos" },
      { key: "total_retenciones", label: "Retenciones" },
      { key: "total_descuento", label: "Descuento" },
      { key: "total_total", label: "Total" },
      { key: "total_pendiente", label: "Total pendiente" },
    ],
  },
  {
    group: "CFDI",
    fields: [
      { key: "cfdi_uuid", label: "UUID del CFDI" },
      { key: "cfdi_fecha", label: "Fecha del CFDI" },
      { key: "cfdi_qr", label: "Código QR del CFDI" },
      { key: "cfdi_cadena", label: "Cadena del CFDI" },
      { key: "cfdi_sello_cfd", label: "Sello CFD" },
      { key: "cfdi_sello_sat", label: "Sello SAT" },
    ],
  },
  {
    group: "Almacén / Usuario",
    fields: [
      { key: "almacen_nombre", label: "Nombre del almacén" },
      { key: "usuario_nombre", label: "Nombre del usuario" },
      { key: "usuario_telefono", label: "Teléfono del usuario" },
      { key: "usuario_correo", label: "Correo del usuario" },
    ],
  },
];

export const FIELDS_BY_TYPE: Record<string, FieldGroup[]> = {
  cot: OR_FIELDS,
  ped: OR_FIELDS,
  fac: OR_FIELDS,
  note: OR_FIELDS,
  pos: [],
};

export const TYPE_LABELS: Record<string, string> = {
  cot: "Cotización",
  ped: "Pedido",
  fac: "Factura",
  note: "Nota",
  pos: "Ticket de venta",
};

/**
 * Mapeo de clave amigable → campo real del resultado de la query (ordersResult).
 * El generador de PDF usa este mapa para resolver {{variable}} en la plantilla.
 */
export const OR_FIELD_MAP: Record<string, string> = {
  doc_codigo: "doccode_or",
  doc_numero: "docnumber_or",
  doc_fecha_creacion: "createdat_or",
  doc_fecha: "docdate_or",
  doc_vencimiento: "duedate_or",
  doc_estatus: "name_status",
  doc_prioridad: "priority_or",
  doc_observaciones: "newobs_or",
  doc_leyenda: "leyend_or",
  doc_clasificacion: "clas_or",
  doc_subclasificacion: "subclas_or",

  cliente_nombre: "name_party",
  cliente_rfc: "rfc_party",
  cliente_cp: "cp_party",
  cliente_codigo: "code_party",
  cliente_referencia: "rf_party",

  empresa_nombre: "name_cmp",
  empresa_telefono: "tel_cmp",
  empresa_rfc: "rfc_cmp",
  empresa_cp: "cp_cmp",
  empresa_referencia: "rf_cmp",
  empresa_codigo_sat: "satcode_cmp",
  empresa_logo: "logourl_cmp",

  pago_condiciones: "payterms_or",
  pago_forma: "payform_or",
  pago_metodo: "paymethod_or",
  pago_uso_cfdi: "cfdiuse_or",
  pago_moneda: "currency_or",
  pago_tipo_cambio: "exchangerate_or",

  total_subtotal: "subtotal_or",
  total_impuestos: "taxes_or",
  total_retenciones: "ret_or",
  total_descuento: "discount_or",
  total_total: "total_or",
  total_pendiente: "totaldue_or",

  cfdi_uuid: "uuid_cfdi",
  cfdi_fecha: "cfdidate_cfdi",
  cfdi_qr: "qr_cfdi",
  cfdi_cadena: "string_cfdi",
  cfdi_sello_cfd: "sellocfd_cfdi",
  cfdi_sello_sat: "sellosat_cfdi",

  almacen_nombre: "name_wh",
  usuario_nombre: "name_user",
  usuario_telefono: "tel_user",
  usuario_correo: "mail_user",
};

export type BarcodeType = {
  idbarcode: number;
  barcodetype: string;
  barcodeidtarget: number;
  barcodebarcode: string;
  barcodestatus: number;
  barcodeiduser: number;
  barcodecreatedat: string;
};

export type OpticutterStockItemType = {
  length: string;
  width: string;
  count: string;
};

export type OpticutterRequirementItemType = {
  length: string;
  width: string;
  count: string;
};

export type OpticutterLayoutResultType = {
  index: number;
  panels: any;
  remainders: any;
  svgImage: string | null;
};

export type OpticutterCutResultType = {
  requiredStocks: any;
  layouts: OpticutterLayoutResultType[];
};

export type RecurrenceType = {
  idrec: number;
  doctype: string;
  iddoc: number;
  frequency: string;
  startdate: string;
  enddate: string | null;
  nextrundate: string | null;
  lastrundate: string | null;
  createdat: string;
  status: number;
  iduser: number;
  username?: string;
  targettype?: number;
};

export type OrderRecurrenceType = RecurrenceType & {
  idor: number;
  ordocnumber2: string;
  idcmer: number;
  cmername: string;
  cmercode: string;
  idcmp: number;
  cmpname: string;
  idwh: number;
  whname: string;
  orcurrency: string;
  orexchangerate: string;
  ortotal: string;
  targettype?: number;
};

export type BillingSerieType = {
  idbillserie: number;
  code: string;
  type: string;
  usedateprefix: number;
  startingfolio: string;
  iduser: number;
  createdat: string;
};
