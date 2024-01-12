module.exports = {
  params: {
    designator: 'S',
    keycaps: false,
    diodes: false,
    routes: false,
    bottom: false,
    left: false,
    from: undefined,
    to: undefined
  },
  body: p => {
    const standard = `
(footprint "PG1350" (version 20221018) (generator pcbnew) (layer "F.Cu")
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
  (pad "1" smd rect (at -3.275 -5.95 ${p.rot}) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${p.from.str})
  (pad "2" smd rect (at 8.275 -3.75 ${p.rot}) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") ${p.to.str})
 
)
`
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
      `
    const diode = `
  (module "Diode_SMD:D_MiniMELF" (version 20221018) (generator pcbnew) (layer "F.Cu")
    (at 0 4 180)
    (attr smd)
    (fp_line (start -2.66 -1.11) (end -2.66 1.11) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
    (fp_line (start -2.66 1.11) (end 1.75 1.11) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
    (fp_line (start 1.75 -1.11) (end -2.66 -1.11) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
    (fp_line (start -2.65 -1.1) (end 2.65 -1.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    (fp_line (start -2.65 1.1) (end -2.65 -1.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    (fp_line (start 2.65 -1.1) (end 2.65 1.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    (fp_line (start 2.65 1.1) (end -2.65 1.1) (stroke (width 0.05) (type solid)) (layer "F.CrtYd") )
    (fp_line (start -1.65 -0.8) (end 1.65 -0.8) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
    (fp_line (start -1.65 0.8) (end -1.65 -0.8) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
    (fp_line (start -0.75 0) (end -0.35 0) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
    (fp_line (start -0.35 0) (end -0.35 -0.55) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
    (fp_line (start -0.35 0) (end -0.35 0.55) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
    (fp_line (start -0.35 0) (end 0.25 -0.4) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
    (fp_line (start 0.25 -0.4) (end 0.25 0.4) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
    (fp_line (start 0.25 0) (end 0.75 0) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
    (fp_line (start 0.25 0.4) (end -0.35 0) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
    (fp_line (start 1.65 -0.8) (end 1.65 0.8) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
    (fp_line (start 1.65 0.8) (end -1.65 0.8) (stroke (width 0.1) (type solid)) (layer "F.Fab") )
    (pad "1" smd roundrect (at -1.75 0 180) (size 1.3 1.7) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1923076923) )
    (pad "2" smd roundrect (at 1.75 0 180) (size 1.3 1.7) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.1923076923) )

    (via (at -3 0) (size 0.5) (drill 0.3) (layers "F.Cu" "B.Cu") (net 0) )
    (via (at 3 0) (size 0.5) (drill 0.3) (layers "F.Cu" "B.Cu") (net 0) )
  )

`
    function route() {
      ret = ``
      if(!p.routes) {
        return ret
      }
      ret = ret + `  
  (segment (start 3 4) (end 1.75 4) (width 0.25) (layer "F.Cu") (net 0) )
  (segment (start -1.75 4) (end -3 4) (width 0.25) (layer "F.Cu") (net 0) )
  (segment (start -3.275 -5.95) (end -3.275 3.725) (width 0.25) (layer "B.Cu") (net 0) )
  (segment (start -3.275 3.725) (end -3 4) (width 0.25) (layer "B.Cu") (net 0) )
      `
      if(!p.bottom) {
        ret = ret + `
        `
      }
      if(!p.left) {
        ret = ret + `
        `
      }
      return ret
    }
    return `
      ${standard}
      ${p.keycaps ? keycap : ''}
      ${p.diodes ? diode : ''}
      ${route()}
      ${pins('-', '', 'B')})
      `
  }
}

