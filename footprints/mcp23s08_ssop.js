module.exports = {
  params: {
    side: 'F',
    SCK: { type: "net", value: "SCK" },
    SI: { type: "net", value: "SI" },
    SO: { type: "net", value: "SO" },
    A1: { type: "net", value: "A1" },
    A0: { type: "net", value: "A0" },
    RST: { type: "net", value: "RST" },
    CS: { type: "net", value: "CS" },
    INT: { type: "net", value: "INT" },
    VSS: { type: "net", value: "VSS" },
    VDD: { type: "net", value: "VDD" },
    GP7: { type: "net", value: "GP7" },
    GP6: { type: "net", value: "GP6" },
    GP5: { type: "net", value: "GP5" },
    GP4: { type: "net", value: "GP4" },
    GP3: { type: "net", value: "GP3" },
    GP2: { type: "net", value: "GP2" },
    GP1: { type: "net", value: "GP1" },
    GP0: { type: "net", value: "GP0" },
  },
  body: (p) => {
    function pins(def_neg, def_pos, def_side) {
      return `
(module mcp23s08_ssop (layer ${def_side}.Cu) (tedit 5D9F72B1)
  ${p.at /* parametric position */}
  (attr smd)
fp_text reference "${p.ref}" (at 0 -4.55) (layer ${def_side}.SilkS) ${p.ref_hide}
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_line (start 0 3.71) (end ${def_pos}2.76 3.71) (layer ${def_side}.SilkS) (width 0.12))
  (fp_line (start ${def_pos}2.76 3.71) (end ${def_pos}2.76 3.435) (layer ${def_side}.SilkS) (width 0.12))
  (fp_line (start 0 3.71) (end ${def_neg}2.76 3.71) (layer ${def_side}.SilkS) (width 0.12))
  (fp_line (start ${def_neg}2.76 3.71) (end ${def_neg}2.76 3.435) (layer ${def_side}.SilkS) (width 0.12))
  (fp_line (start 0 -3.71) (end ${def_pos}2.76 -3.71) (layer ${def_side}.SilkS) (width 0.12))
  (fp_line (start ${def_pos}2.76 -3.71) (end ${def_pos}2.76 -3.435) (layer ${def_side}.SilkS) (width 0.12))
  (fp_line (start 0 -3.71) (end ${def_neg}2.76 -3.71) (layer ${def_side}.SilkS) (width 0.12))
  (fp_line (start ${def_neg}2.76 -3.71) (end ${def_neg}2.76 -3.435) (layer ${def_side}.SilkS) (width 0.12))
  (fp_line (start ${def_neg}2.76 -3.435) (end ${def_neg}4.45 -3.435) (layer ${def_side}.SilkS) (width 0.12))
  (fp_line (start ${def_neg}1.65 -3.6) (end ${def_pos}2.65 -3.6) (layer ${def_side}.Fab) (width 0.1))
  (fp_line (start ${def_pos}2.65 -3.6) (end ${def_pos}2.65 3.6) (layer ${def_side}.Fab) (width 0.1))
  (fp_line (start ${def_pos}2.65 3.6) (end ${def_neg}2.65 3.6) (layer ${def_side}.Fab) (width 0.1))
  (fp_line (start ${def_neg}2.65 3.6) (end ${def_neg}2.65 -2.6) (layer ${def_side}.Fab) (width 0.1))
  (fp_line (start ${def_neg}2.65 -2.6) (end ${def_neg}1.65 -3.6) (layer ${def_side}.Fab) (width 0.1))
  (fp_line (start ${def_neg}4.7 -3.85) (end ${def_neg}4.7 3.85) (layer ${def_side}.CrtYd) (width 0.05))
  (fp_line (start ${def_neg}4.7 3.85) (end ${def_pos}4.7 3.85) (layer ${def_side}.CrtYd) (width 0.05))
  (fp_line (start ${def_pos}4.7 3.85) (end ${def_pos}4.7 -3.85) (layer ${def_side}.CrtYd) (width 0.05))
  (fp_line (start ${def_pos}4.7 -3.85) (end ${def_neg}4.7 -3.85) (layer ${def_side}.CrtYd) (width 0.05))
  (pad 1 smd roundrect (at ${def_neg}3.5 -2.925 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.SCK.str})
  (pad 2 smd roundrect (at ${def_neg}3.5 -2.275 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.SI.str})
  (pad 3 smd roundrect (at ${def_neg}3.5 -1.625 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.SO.str})
  (pad 4 smd roundrect (at ${def_neg}3.5 -0.975 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.A1.str})
  (pad 5 smd roundrect (at ${def_neg}3.5 -0.325 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.A0.str})
  (pad 6 smd roundrect (at ${def_neg}3.5 0.325 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.RST.str})
  (pad 7 smd roundrect (at ${def_neg}3.5 0.975 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.CS.str})
  (pad 8 smd roundrect (at ${def_neg}3.5 1.625 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.INT.str})
  (pad 9 smd roundrect (at ${def_neg}3.5 2.275 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.VSS.str})
  (pad 10 smd roundrect (at ${def_neg}3.5 2.925 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25))
  (pad 11 smd roundrect (at ${def_pos}3.5 2.925 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25))
  (pad 12 smd roundrect (at ${def_pos}3.5 2.275 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.GP0.str})
  (pad 13 smd roundrect (at ${def_pos}3.5 1.625 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.GP1.str})
  (pad 14 smd roundrect (at ${def_pos}3.5 0.975 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.GP2.str})
  (pad 15 smd roundrect (at ${def_pos}3.5 0.325 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.GP3.str})
  (pad 16 smd roundrect (at ${def_pos}3.5 -0.325 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.GP4.str})
  (pad 17 smd roundrect (at ${def_pos}3.5 -0.975 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.GP5.str})
  (pad 18 smd roundrect (at ${def_pos}3.5 -1.625 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.GP6.str})
  (pad 19 smd roundrect (at ${def_pos}3.5 -2.275 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.GP7.str})
  (pad 20 smd roundrect (at ${def_pos}3.5 -2.925 ${p.rot}) (size 1.9 0.5) (layers ${def_side}.Cu ${def_side}.Mask ${def_side}.Paste) (roundrect_rratio 0.25) ${p.VDD.str})
)
`;
    }
    if (p.side == 'F') {
      return `
        ${pins("-", "", "F")}
        `;
    } else {
      return `
        ${pins("", "-", "B")}
        `;
    }
  },
};
