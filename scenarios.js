module.exports = {
  scenarios: {
    'center-box': {
      label: "Center Box",
      objective: "Vertically center the box.",
      htmlContent: `
<div class="box-parent">
  <div class="center-box"></div>
</div>`,
      cssContent: `
.box-parent {
  height: 100%;
  width: 100%;
}
.center-box {
  height: 100px;
  width: 100px;
  background: red;
}
`
    }
  }
};
