module.exports = {
    params: {
        class: 'S', 
		reverse: true,
		r1: {type: 'net', value: 'r1'},
        r2: {type: 'net', value: 'r2'}
    },
    body: p => {
	    const standard = `
			(module Button_Switch_SMD:SW_SPST_B3U-1000P (layer F.Cu) (tedit 5A02FC95)
        	${p.at /* parametric position */}
	  		(descr "Ultra-small-sized Tactile Switch with High Contact Reliability, Top-actuated Model, without Ground Terminal, without Boss")
			(tags "Tactile Switch")
			(attr smd)
			(fp_circle (center 0 0) (end 0.75 0) (layer F.Fab) (width 0.1))
			(fp_line (start -1.5 1.25) (end -1.5 -1.25) (layer F.Fab) (width 0.1))
			(fp_line (start 1.5 1.25) (end -1.5 1.25) (layer F.Fab) (width 0.1))
			(fp_line (start 1.5 -1.25) (end 1.5 1.25) (layer F.Fab) (width 0.1))
			(fp_line (start -1.5 -1.25) (end 1.5 -1.25) (layer F.Fab) (width 0.1))
			(fp_line (start -2.4 -1.65) (end -2.4 1.65) (layer F.CrtYd) (width 0.05))
			(fp_line (start 2.4 -1.65) (end -2.4 -1.65) (layer F.CrtYd) (width 0.05))
			(fp_line (start 2.4 1.65) (end 2.4 -1.65) (layer F.CrtYd) (width 0.05))
			(fp_line (start -2.4 1.65) (end 2.4 1.65) (layer F.CrtYd) (width 0.05))
			(fp_text user %R (at 0 -2.5) (layer F.Fab)
			(effects (font (size 1 1) (thickness 0.15)))
			)`
	  
		    	
		 
	    if(p.reverse) {
	    	return `
				${standard}
				${''/* pins */}
	  			(pad 1 thru_hole rect (at -1.7 0) (size 0.9 1.7) (drill 0.3 (offset -0.1 0)) (layers *.Cu *.Paste *.Mask) ${p.r1.str})
	  			(pad 2 thru_hole rect (at 1.7 0) (size 0.9 1.7) (drill 0.3 (offset 0.1 0)) (layers *.Cu *.Paste *.Mask) ${p.r2.str}))
			`
	    } else {
	    	return `
			${standard}
				(pad 1 smd rect (at -1.7 0) (size 0.9 1.7) (layers B.Cu B.Paste B.Mask) ${p.r1.str})
	  			(pad 2 smd rect (at 1.7 0) (size 0.9 1.7) (layers B.Cu B.Paste B.Mask) ${p.r2.str}))
			`
	    }
	}
}
