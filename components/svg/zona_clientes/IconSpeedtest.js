function IconSpeedtest(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={150}
      height={150}
      viewBox="0 0 150 150"
      {...props}
    >
      <g data-name="ICONO_Test de Velocidad">
        <image
          data-name="Vector Smart Object"
          x={13}
          y={18}
          width={124}
          height={113}
          xlinkHref="data:image/png;base64,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"
        />
      </g>
    </svg>
  );
}

export default IconSpeedtest;