module.exports = {
  params: {
    designator: 'B', // for Button
    side: 'F',
    from: undefined,
    to: undefined
  },
  body: p => `
    (module Button_Switch_SMD:SW_SPST_B3U-1000P (layer F.Cu) (tedit 5A02FC95)
      ${p.at /* parametric position */}
      (descr "Ultra-small-sized Tactile Switch with High Contact Reliability, Top-actuated Model, without Ground Terminal, without Boss")
      (tags "Tactile Switch")
      (attr smd)
      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer ${p.side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer ${p.side}.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      (fp_line (start -2.45 0.275) (end -2.45 -0.275)
        (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") (tstamp c54da363-6e04-477b-838b-38e387c93b35))
      (fp_line (start -1.425 -1.85) (end -2.35 -1.85)
        (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") (tstamp 26fa82fc-78b2-4aa6-a286-66cb26b5a470))
      (fp_line (start 2.35 -1.85) (end 1.425 -1.85)
        (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") (tstamp 9147ca26-cfbb-41ff-9286-15be436c66c8))
      (fp_line (start 2.35 1.85) (end -2.35 1.85)
        (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") (tstamp e79e01d1-6308-419c-bfc2-ca8da312dedf))
      (fp_line (start 2.45 0.275) (end 2.45 -0.275)
        (stroke (width 0.12) (type solid)) (layer "${p.side}.SilkS") (tstamp 1c0ed0e7-e037-4876-96c5-f95f413d6994))
      (fp_line (start -3.9 2.25) (end -3.9 -3.25)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd") (tstamp 466db1c2-44b6-459b-ba78-a7ce088652bb))
      (fp_line (start 3.9 -3.25) (end -3.9 -3.25)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd") (tstamp 7719cc1e-1184-4b94-a8ad-b3a4a4799514))
      (fp_line (start 3.9 2.25) (end -3.9 2.25)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd") (tstamp f8f701a2-c02b-46af-9e40-083f447a696e))
      (fp_line (start 3.9 2.25) (end 3.9 -3.25)
        (stroke (width 0.05) (type solid)) (layer "${p.side}.CrtYd") (tstamp d3e572ce-5563-4920-b9c7-e9bce1886ab1))
      (fp_line (start -2.35 1.75) (end -2.35 -1.75)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") (tstamp 443c0687-ead9-4090-a12d-712a4fe009e0))
      (fp_line (start -1.3 -2.75) (end -1.3 -1.75)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") (tstamp 15151293-a4a7-49be-a842-c3a1e0ed2902))
      (fp_line (start 1.3 -2.75) (end -1.3 -2.75)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") (tstamp b967782d-5a60-4517-a07f-23515f75c4e9))
      (fp_line (start 1.3 -2.75) (end 1.3 -1.75)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") (tstamp 14b9f03d-7e2a-442f-9f7f-12c70e6a591a))
      (fp_line (start 2.35 -1.75) (end -2.35 -1.75)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") (tstamp f9b08cdf-4871-40c4-ac68-14feaa3bf65b))
      (fp_line (start 2.35 1.75) (end -2.35 1.75)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") (tstamp af214c59-5edc-4a45-aae8-c85208454bc6))
      (fp_line (start 2.35 1.75) (end 2.35 -1.75)
        (stroke (width 0.1) (type solid)) (layer "${p.side}.Fab") (tstamp 9d00de10-4071-468b-a2b7-9b5162ce4fe1))

      ${'' /* pins */}
      (pad "" np_thru_hole circle (at 0 -1.375 90) (size 0.75 0.75) (drill 0.75) (layers "*.Cu" "*.Mask") (tstamp 37860410-73bd-437d-8f31-400394217316))
      (pad "" np_thru_hole circle (at 0 1.375 90) (size 0.75 0.75) (drill 0.75) (layers "*.Cu" "*.Mask") (tstamp e1b66ef1-637c-49c0-a85e-96ebc5faf88f))
      (pad "1" smd rect (at -2.625 -0.85 ${p.rot+90}) (size 1.55 1) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.from.str})
      (pad "1" smd rect (at 2.625 -0.85 ${p.rot+90}) (size 1.55 1) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.from.str})
      (pad "2" smd rect (at -2.625 0.85 ${p.rot+90}) (size 1.55 1) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.to.str})
      (pad "2" smd rect (at 2.625 0.85 ${p.rot+90}) (size 1.55 1) (layers "${p.side}.Cu" "${p.side}.Paste" "${p.side}.Mask") ${p.to.str})
      
    )
  `
}


