function IconReportarPago(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={150}
      height={150}
      viewBox="0 0 150 150"
      {...props}
    >
      <g data-name="ICONO_Reportar Pago">
        <image
          data-name="Vector Smart Object"
          x={16}
          y={12}
          width={119}
          height={128}
          xlinkHref="data:image/png;base64,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"
        />
      </g>
    </svg>
  );
}

export default IconReportarPago;