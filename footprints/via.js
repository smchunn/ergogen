// Author: Ergogen + @infused-kim improvements
//
// @infused-kim's improvements:
//  - Added option to hide thru-holes
//  - Added virtual attribute to silence DRC error


module.exports = {
    params: {
        designator: 'V',
        net: undefined
    },
    body: p => {

        const standard_opening = `
        (module via (layer F.Cu) (tedit 5B24D78E)
            ${p.at /* parametric position */}
            (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            
            (pad 1 thru_hole circle (at 0 0) (size .5 .5) (drill 0.3) (layers "*.Cu" "*.SilkS" "*.Mask") ${p.net.str} )
        `
        const standard_closing = `
        )
        `

        let final = standard_opening + standard_closing;

        return final;
    }
}
