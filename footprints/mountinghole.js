// MountingHole_2.2mm_M2_Pad_Via
// TODO add more sizes as param?
module.exports = {
  nets: {
    net: undefined,
  },
  params: {
    class: "HOLE",
  },
  body: (p) => `
    (module mounting_hole (version 20210722)  (layer "F.Cu")
      ${p.at /* parametric position */} 
    
      (fp_text reference "${p.ref}" (at 0 -3.2) (layer "F.SilkS") ${p.ref_hide} 
        (effects (font (size 1 1) (thickness 0.15)))
      )
    
      (fp_circle (center 0 0) (end 2.45 0) (layer "F.CrtYd") (width 0.05) (fill none) (tstamp b2688462-c375-45d3-9095-3425fb17c88f))
      (pad "1" thru_hole circle locked (at 0 0) (size 4.6 4.6) (drill 2) (layers *.Cu *.Mask) (tstamp 47ee1d53-0551-4b6d-bc24-3f3f14c73c36))
    )`,
};
