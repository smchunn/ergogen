crescentsplit:
	ergogen ./crescentsplit -o ./crescentsplit/output
crescentsplit-left:
	ergogen ./crescentsplit-left -o ./crescentsplit-left/output
crescentsplit-right:
	ergogen ./crescentsplit-right -o ./crescentsplit-right/output
test_matrix:
	ergogen ./test_matrix -o ./test_matrix/output
smcboard_mono:
	ergogen ./smcboard_mono -o ./smcboard_mono/output 
	for i in smcboard_mono/output/cases/*.jscad; do npx @jscad/cli@1 $$i -of stla; done

.PHONY: all crescentsplit crescentsplit-left crescentsplit-right test_matrix smcboard_mono clean
