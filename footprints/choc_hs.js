module.exports = {
  params: {
    designator: 'S',
    keycaps: false,
    diodes: false,
    route_internal: false,
    route_row: false,
    route_col: false,
    bottom: false,
    left: false,
    id: undefined,
    padding_x: 0,
    padding_y: 0,
    from: undefined,
    to: undefined,
  },
  body: p => {
    if(typeof p.left != 'boolean') { p.left = p.left.test(p.id)}
    if(typeof p.bottom != 'boolean') { p.bottom = p.bottom.test(p.id)}
    const standard = `
(module PG1350 (layer F.Cu) (tedit 5DD50112)
  ${p.at /* parametric position */}
  (attr through_hole)
  (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
  (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

  (fp_line (start -7 -6) (end -7 -7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
  (fp_line (start -7 7) (end -7 6) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
  (fp_line (start -7 7) (end -6 7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
  (fp_line (start -6 -7) (end -7 -7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
  (fp_line (start 6 7) (end 7 7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
  (fp_line (start 7 -7) (end 6 -7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
  (fp_line (start 7 -7) (end 7 -6) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
  (fp_line (start 7 6) (end 7 7) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )

  (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask") )
  (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers "*.Cu" "*.Mask") )
  (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers "*.Cu" "*.Mask") )
  (pad "" np_thru_hole circle (at 5 -3.75) (size 3 3) (drill 3) (layers "*.Cu" "*.Mask") )
  (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers "*.Cu" "*.Mask") )
  (pad "1" smd rect (at -3.275 -5.95 ${p.rot}) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${!p.diodes ? p.from.str : p.id.str})
  (pad "2" smd rect (at 8.275 -3.75 ${p.rot}) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${p.to.str})
${p.route_col ? `
  (pad "" smd roundrect (at 8.275 ${-3.75 + p.padding_y/2} ${p.rot}) (size 0.15 ${p.padding_y}) (layers "B.Cu") (roundrect_rratio 0.25) ${p.to.str})
` : `
`}
`
    const keycap = `
      ${'' /* keycap marks */}
  (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
  (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
`
    const diode = `
  (fp_line (start -4.385 -1.225) (end -4.385 3.185) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
  (fp_line (start -4.385 3.185) (end -2.165 3.185) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
  (fp_line (start -2.165 3.185) (end -2.165 -1.225) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
  (fp_line (start -4.375 -2.125) (end -2.175 -2.125) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
  (fp_line (start -4.375 3.175) (end -4.375 -2.125) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
  (fp_line (start -2.175 -2.125) (end -2.175 3.175) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
  (fp_line (start -2.175 3.175) (end -4.375 3.175) (stroke (width 0.05) (type solid)) (layer "B.CrtYd") )
  (fp_line (start -4.075 -1.125) (end -2.475 -1.125) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start -4.075 2.175) (end -4.075 -1.125) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start -3.675 0.275) (end -2.875 0.275) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start -3.275 0.275) (end -3.275 -0.225) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start -3.275 0.875) (end -3.825 0.875) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start -3.275 0.875) (end -3.675 0.275) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start -3.275 0.875) (end -2.725 0.875) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start -3.275 1.275) (end -3.275 0.875) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start -2.875 0.275) (end -3.275 0.875) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start -2.475 -1.125) (end -2.475 2.175) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (fp_line (start -2.475 2.175) (end -4.075 2.175) (stroke (width 0.1) (type solid)) (layer "B.Fab") )
  (pad "3" smd roundrect (at -3.275 -1.225 ${p.rot}) (size 1.7 1.3) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1923076923) ${p.id.str})
  (pad "4" smd roundrect (at -3.275 2.275 ${p.rot}) (size 1.7 1.3) (layers "B.Cu" "B.Paste" "B.Mask") (roundrect_rratio 0.1923076923) ${p.from.str})
  (pad "6" thru_hole circle (at -3.275 3.8) (size 0.5 0.5) (drill 0.3) (layers "*.Cu") ${p.from.str})

${p.route_internal ? `
  (pad "" smd roundrect (at -3.275 -3.4875 ${p.rot}) (size 0.15 4.725) (layers "B.Cu") (roundrect_rratio 0.25) ${p.id.str})
  (pad "" smd roundrect (at -3.275 3.0375 ${p.rot}) (size 0.15 1.525) (layers "B.Cu") (roundrect_rratio 0.25) ${p.from.str})
` : `
`}
${false && p.route_row && !p.left ? `
      (gr_line (start 1.525 0) (end 1.525 1.5) (width 0.15))
      (gr_line (start ${1.525-p.padding_x} 1.5) (end 1.525 1.5) (width 0.15))
` : ``}
${false && p.route_row && p.left ? `
      (gr_line (start 1.525 0) (end 1.525 1.5) (width 0.15))
` : ``}
`
    return `
      ${standard}
      ${p.keycaps ? keycap : ''}
      ${p.diodes ? diode : ''}
)
`
  }
}

