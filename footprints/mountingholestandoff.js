module.exports = {
    params: {
        class: 'HOLE',
        side: 'B'
    },
    body: p => `
    (module "MountingHole"  (layer "${p.side}.Cu")

      ${p.at /* parametric position */} 

      (fp_text reference "" (at 0 0) (layer ${p.side}.SilkS)
          (effects (font (size 1.27 1.27) (thickness 0.15)))
        
      )
      (fp_text value "" (at 0 0) (layer ${p.side}.SilkS)
          (effects (font (size 1.27 1.27) (thickness 0.15)))
        
      )

      (pad "" np_thru_hole circle (at 0 0) (size 5.4 5.4) (drill 2.95) (layers "${p.side}.Cu" "${p.side}.Mask") )

    )`
}
