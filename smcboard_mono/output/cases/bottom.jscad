function _case_edge_extrude_2_outline_fn(){
    return new CSG.Path2D([[148.5131488,-176.191615],[104.7524285,-164.4659654]]).appendArc([100.5097876,-157.1174962],{"radius":6,"clockwise":true,"large":false}).appendPoint([112.8994801,-110.8785347]).appendArc([116.8439805,-106.7241204],{"radius":6,"clockwise":true,"large":false}).appendPoint([135.8210067,-100.5693125]).appendArc([137.6590755,-100.276655],{"radius":6,"clockwise":true,"large":false}).appendPoint([155.9535346,-100.2370595]).appendArc([157.5194346,-100.4414905],{"radius":6,"clockwise":true,"large":false}).appendPoint([174.6196817,-105.0234879]).appendArc([176.0780067,-105.6293957],{"radius":6,"clockwise":true,"large":false}).appendPoint([207.4880169,-123.8547294]).appendArc([208.9936365,-124.2599058],{"radius":3,"clockwise":false,"large":false}).appendPoint([226.1519514,-124.2599058]).appendArc([227.657571,-123.8547294],{"radius":3,"clockwise":false,"large":false}).appendPoint([259.0675811,-105.6293956]).appendArc([260.5259062,-105.0234879],{"radius":6,"clockwise":true,"large":false}).appendPoint([277.6261531,-100.4414904]).appendArc([279.1920531,-100.2370596],{"radius":6,"clockwise":true,"large":false}).appendPoint([297.4865124,-100.2766549]).appendArc([299.3245811,-100.5693125],{"radius":6,"clockwise":true,"large":false}).appendPoint([318.3016072,-106.7241204]).appendArc([322.2461077,-110.8785346],{"radius":6,"clockwise":true,"large":false}).appendPoint([334.6358001,-157.1174962]).appendArc([334.6360835,-157.1185544],{"radius":3,"clockwise":true,"large":false}).appendArc([330.3931594,-164.4659653],{"radius":6,"clockwise":true,"large":false}).appendPoint([286.6324389,-176.1916151]).appendArc([285.2627762,-176.993165],{"radius":3,"clockwise":false,"large":false}).appendPoint([270.002068,-192.6170923]).appendArc([270.0007614,-192.6184299],{"radius":3,"clockwise":true,"large":false}).appendArc([268.2449969,-193.863038],{"radius":6,"clockwise":true,"large":false}).appendPoint([252.1728985,-201.3575807]).appendPoint([238.0301633,-210.6577502]).appendArc([238.029248,-210.658352],{"radius":3,"clockwise":true,"large":false}).appendArc([234.7334854,-211.6445761],{"radius":6,"clockwise":true,"large":false}).appendPoint([200.4121023,-211.6445761]).appendArc([197.1154245,-210.6577502],{"radius":6,"clockwise":true,"large":false}).appendArc([197.1154244,-210.6577503],{"radius":3,"clockwise":true,"large":false}).appendPoint([183.155903,-201.4779283]).appendArc([182.7754189,-201.2655921],{"radius":3,"clockwise":false,"large":false}).appendPoint([166.9005909,-193.8630381]).appendArc([165.1448264,-192.6184299],{"radius":6,"clockwise":true,"large":false}).appendArc([165.1440609,-192.6176465],{"radius":3,"clockwise":true,"large":false}).appendPoint([149.8828117,-176.9931651]).appendArc([148.5131488,-176.1916151],{"radius":3,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 2] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = _case_edge_extrude_2_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        