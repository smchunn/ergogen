module.exports = {
  params: {
    side: 'F',
    P0: { type: "net", value: "P0" },
    P1: { type: "net", value: "P1" },
    P2: { type: "net", value: "P2" },
    P3: { type: "net", value: "P3" },
    P4: { type: "net", value: "P4" },
    P5: { type: "net", value: "P5" },
    P6: { type: "net", value: "P6" },
    P7: { type: "net", value: "P7" },
    P8: { type: "net", value: "P8" },
    P9: { type: "net", value: "P9" },
    P10: { type: "net", value: "P10" },
    VCC: { type: "net", value: "VCC" },
    GND: { type: "net", value: "GND" },
    V3: { type: "net", value: "V3" },
    RST: { type: "net", value: "RST" },
    SWDIO: { type: "net", value: "SWDIO" },
    SWCLK: { type: "net", value: "SWCLK" },
    BATP: { type: "net", value: "BATP" },
    BATN: { type: "net", value: "BATN" },
  },
  body: (p) => 
    `
(module seeed_xiao (layer ${p.side}.Cu)
  ${p.at /* parametric position */}
  
  (fp_text reference "" (at 0 0) (layer ${p.side}.SilkS)
      (effects (font (size 1.27 1.27) (thickness 0.15)))
    
  )
  (fp_text value "" (at 0 0) (layer ${p.side}.SilkS)
      (effects (font (size 1.27 1.27) (thickness 0.15)))
    
  )

  (fp_rect (start -8.89 10.5) (end 8.89 -10.5) (layer "Dwgs.User") (width 0.12) (fill none) )
  (fp_rect (start 3.350197 -6.785813) (end 5.128197 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) )
  (fp_rect (start -3.507811 -8.182813) (end -5.285811 -10.849813) (layer "Dwgs.User") (width 0.12) (fill none) )
  (fp_rect (start 3.350197 -10.849813) (end 5.128197 -8.182813) (layer "Dwgs.User") (width 0.12) (fill none) )
  (fp_rect (start -5.285811 -6.785813) (end -3.507811 -4.118813) (layer "Dwgs.User") (width 0.12) (fill none) )
  (pad "1" smd oval (at ${p.side == 'F' ? '-' : ''}8.56996 -7.62 ${180 + p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P0.str})
  (pad "2" smd oval (at ${p.side == 'F' ? '-' : ''}8.56996 -5.08 ${180 + p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P1.str})
  (pad "3" smd oval (at ${p.side == 'F' ? '-' : ''}8.56996 -2.54 ${180 + p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P2.str})
  (pad "4" smd oval (at ${p.side == 'F' ? '-' : ''}8.56996 0 ${180 + p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P3.str})
  (pad "5" smd oval (at ${p.side == 'F' ? '-' : ''}8.56996 2.54 ${180 + p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P4.str})
  (pad "6" smd oval (at ${p.side == 'F' ? '-' : ''}8.56996 5.08 ${180 + p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P5.str})
  (pad "7" smd oval (at ${p.side == 'F' ? '-' : ''}8.56996 7.62 ${180 + p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P6.str})
  (pad "8" smd oval (at ${p.side == 'F' ? '' : '-'}8.56996 7.62 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P7.str})
  (pad "9" smd oval (at ${p.side == 'F' ? '' : '-'}8.56996 5.08 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P8.str})
  (pad "10" smd oval (at ${p.side == 'F' ? '' : '-'}8.56996 2.54 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P9.str})
  (pad "11" smd oval (at ${p.side == 'F' ? '' : '-'}8.56996 0 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.P10.str})
  (pad "12" smd oval (at ${p.side == 'F' ? '' : '-'}8.56996 -2.54 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.V3.str})
  (pad "13" smd oval (at ${p.side == 'F' ? '' : '-'}8.56996 -5.08 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.GND.str})
  (pad "14" smd oval (at ${p.side == 'F' ? '' : '-'}8.56996 -7.62 ${p.rot}) (size 2.75 1.8) (drill (offset -0.475 0)) (layers ${p.side}.Cu ${p.side}.Paste ${p.side}.Mask) ${p.VCC.str})
  (pad "15" thru_hole circle (at ${p.side == 'F' ? '-' : ''}1.27 -8.572 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.SWDIO.str})
  (pad "16" thru_hole circle (at ${p.side == 'F' ? '' : '-'}1.27 -8.572 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.SWCLK.str})
  (pad "17" thru_hole circle (at ${p.side == 'F' ? '-' : ''}1.27 -6.032 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.RST.str})
  (pad "18" thru_hole circle (at ${p.side == 'F' ? '' : '-'}1.27 -6.032 ${90 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.GND.str})
  (pad "19" thru_hole circle (at ${p.side == 'F' ? '-' : ''}4.445 -0.317 ${180 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.BATP.str})
  (pad "20" thru_hole circle (at ${p.side == 'F' ? '-' : ''}4.445 -2.222 ${180 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) ${p.BATN.str})
  ${''/*(pad "21" thru_hole circle (at 3.81 9.208 ${180 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) )*/}
  ${''/*(pad "22" thru_hole circle (at 5.715 9.208 ${180 + p.rot}) (size 1.397 1.397) (drill 1.016) (layers *.Cu *.Mask) )*/}
)
    `
  
};

