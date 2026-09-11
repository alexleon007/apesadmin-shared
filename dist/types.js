const OR_DETAIL_COLUMNS = [
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
export const DETAIL_COLUMNS_BY_TYPE = {
    cot: OR_DETAIL_COLUMNS,
    ped: OR_DETAIL_COLUMNS,
    fac: OR_DETAIL_COLUMNS,
    note: OR_DETAIL_COLUMNS,
    pos: [],
};
const OR_FIELDS = [
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
export const FIELDS_BY_TYPE = {
    cot: OR_FIELDS,
    ped: OR_FIELDS,
    fac: OR_FIELDS,
    note: OR_FIELDS,
    pos: [],
};
export const TYPE_LABELS = {
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
export const OR_FIELD_MAP = {
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
//# sourceMappingURL=types.js.map