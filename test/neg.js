var count = (function neg(Decimal) {
    var start = +new Date(),
        log,
        error,
        passed = 0,
        total = 0;

    if (typeof window === 'undefined') {
        log = console.log;
        error = console.error;
    } else {
        log = function (str) { document.body.innerHTML += str.replace('\n', '<br>') };
        error = function (str) { document.body.innerHTML += '<div style="color: red">' +
          str.replace('\n', '<br>') + '</div>' };
    }

    if (!Decimal && typeof require === 'function') Decimal = require('../decimal');

    function assert(expected, actual) {
        total++;
        if (expected !== actual) {
           error('\n Test number: ' + total + ' failed');
           error(' Expected: ' + expected);
           error(' Actual:   ' + actual);
           //process.exit();
        } else {
            passed++;
            //log('\n Expected and actual: ' + actual);
        }
    }

    function T(expected, value){
        assert(String(expected), String(new Decimal(value).neg()));
    }

    function isMinusZero(n) {
        return n.toString() === '0' && n.s == -1;
    }

    log('\n Testing neg...');

    Decimal.config({
        precision: 20,
        rounding: 4,
        errors: true,
        toExpNeg: -7,
        toExpPos: 21,
        minE: -9e15,
        maxE: 9e15
    });

    T(-4, 4);
    T(-2147483648, 2147483648);
    T(-0.25, 0.25);
    T(-0.0625, 0.0625);
    T(-1, 1);
    T(1, -1);
    T(0, 0);
    T(NaN, NaN);
    T(-Infinity, Infinity);
    T(-Infinity, +Infinity);
    T(Infinity, -Infinity);
    T(+Infinity, -Infinity);

    T('0', '0');
    T('-238', '238');
    T('1.3e-11', '-0.000000000013');
    T('-33.1', '33.1');
    T('2.61', '-2.61');
    T('-4', '4.0');
    T('-5.8', '5.8');
    T('-3.52e-7', '0.000000352');
    T('190', '-190');
    T('4.47', '-4.47');
    T('6.9525e-12', '-0.0000000000069525');
    T('1.3', '-1.3');
    T('-6.21', '6.21');
    T('2', '-2');
    T('-1', '1');
    T('147.857', '-147.857');
    T('-26.517', '26.517');
    T('-3', '3');
    T('5', '-5');
    T('204', '-204');
    T('2.1e-8', '-0.000000021');
    T('3.7015e-7', '-0.00000037015');
    T('-50.1839', '50.1839');
    T('44768.1', '-44768.1');
    T('3.8e-15', '-0.0000000000000038');
    T('-7.4379', '7.4379');
    T('1.5', '-1.5');
    T('6.0399', '-6.0399');
    T('109.07', '-109.070');
    T('1582', '-1582');
    T('-772', '772');
    T('-6.7824e-14', '0.000000000000067824');
    T('-1.819e-8', '0.00000001819');
    T('-3e-15', '0.0000000000000030');
    T('-424120', '424120');
    T('-1814.54', '1814.54');
    T('-4.295e-17', '0.00000000000000004295');
    T('-5', '5');
    T('2152', '-2152');
    T('4.6', '-4.6');
    T('1.9', '-1.9');
    T('-2', '2.0');
    T('-0.00036', '0.00036');
    T('-0.000006962', '0.000006962');
    T('3.6', '-3.6');
    T('-1.1495e-14', '0.000000000000011495');
    T('-312.4', '312.4');
    T('4.3e-10', '-0.00000000043');
    T('5', '-5');
    T('-1.8911e-8', '0.000000018911');
    T('4963.53', '-4963.53');
    T('-4.3934e-10', '0.00000000043934');
    T('-1.3', '1.30');
    T('-1', '1.0');
    T('-68.32', '68.32');
    T('0.014836', '-0.014836');
    T('8', '-8');
    T('2.1351', '-2.13510');
    T('162224', '-162224');
    T('3e-19', '-0.00000000000000000030');
    T('0.00004985', '-0.00004985');
    T('28.9321', '-28.9321');
    T('-2', '2');
    T('-16688', '16688');
    T('-1', '1');
    T('5', '-5');
    T('-20', '20.0');
    T('-1.9', '1.9');
    T('3', '-3');
    T('185640', '-185640');
    T('-0.0000058', '0.0000058');
    T('9.67e-13', '-0.000000000000967');
    T('-707.98', '707.98');
    T('2.57917', '-2.57917');
    T('-1.3', '1.3');
    T('-4.2655', '4.2655');
    T('-149.6', '149.6');
    T('-1.32383', '1.32383');
    T('-26.925', '26.925');
    T('-0.00013', '0.00013');
    T('-6868', '6868');
    T('7', '-7');
    T('-5e-9', '0.0000000050');
    T('3.2555e-16', '-0.00000000000000032555');
    T('1.42768e-13', '-0.000000000000142768');
    T('11.2962', '-11.2962');
    T('3186.7', '-3186.7');
    T('-6.9', '6.9');
    T('-6.2618e-7', '0.00000062618');
    T('8', '-8');
    T('-8.04', '8.04');
    T('-22', '22');
    T('-750.6', '750.6');
    T('12.803', '-12.803');
    T('-20513.4', '20513.4');
    T('114781', '-114781');
    T('-16.9046', '16.9046');
    T('4.6e-7', '-0.00000046');
    T('-31399', '31399');
    T('1.04', '-1.04');
    T('-51.2544', '51.2544');
    T('1.023e-15', '-0.000000000000001023');
    T('281', '-281');
    T('-128315', '128315');
    T('20.2', '-20.2');
    T('9', '-9');
    T('-10', '10');
    T('-1.92262e-17', '0.0000000000000000192262');
    T('-0.0023', '0.0023');
    T('5', '-5');
    T('7', '-7');
    T('13.72', '-13.72');
    T('98068', '-98068');
    T('3.2', '-3.2');
    T('1.1', '-1.1');
    T('-3.97e-18', '0.000000000000000003970');
    T('0.00334824', '-0.00334824');
    T('-5.4892e-8', '0.000000054892');
    T('-1', '1.0');
    T('-2.8135e-8', '0.000000028135');
    T('-1.816e-13', '0.0000000000001816');
    T('199724', '-199724');
    T('-19.4', '19.40');
    T('-12.74', '12.74');
    T('-2171.8', '2171.8');
    T('-2.7', '2.7');
    T('1', '-1.0');
    T('21779', '-21779');
    T('8.9e-12', '-0.0000000000089');
    T('-4.51', '4.51');
    T('2.6', '-2.6');
    T('-0.00016', '0.000160');
    T('6', '-6');
    T('50.566', '-50.566');
    T('-16.2', '16.2');
    T('-9444', '9444');
    T('21.4', '-21.4');
    T('2.5', '-2.5');
    T('489311', '-489311');
    T('6.8', '-6.8');
    T('4.29', '-4.29');
    T('23982', '-23982.0');
    T('-0.0111781', '0.0111781');
    T('4.96e-20', '-0.0000000000000000000496');
    T('-40.5481', '40.5481');
    T('-32.52', '32.52');
    T('-7.4', '7.4');
    T('1008', '-1008');
    T('1.2', '-1.2');
    T('-5', '5.0');
    T('-2463.4', '2463.4');
    T('7.363', '-7.363');
    T('2.8', '-2.8');
    T('-14498', '14498');
    T('201', '-201');
    T('3.2', '-3.2');
    T('-3.05', '3.05');
    T('1.1', '-1.1');
    T('-380.4', '380.4');
    T('13399', '-13399');
    T('-20.44', '20.44');
    T('1.6', '-1.6');
    T('2.1234e-10', '-0.00000000021234');
    T('4404.1', '-4404.1');
    T('2.4345', '-2.4345');
    T('-117.256', '117.256');
    T('-6.025', '6.025');
    T('18.43', '-18.43');
    T('-47.5', '47.5');
    T('45.1', '-45.1');
    T('-3806.5', '3806.5');
    T('-4.6', '4.6');
    T('-1.3', '1.3');
    T('-74.6', '74.60');
    T('-16.2088', '16.2088');
    T('788.6', '-788.6');
    T('-0.29', '0.29');
    T('1', '-1');
    T('-4.058', '4.058');
    T('5', '-5.0');
    T('0.00612', '-0.00612');
    T('-14317', '14317');
    T('-1.1801', '1.1801');
    T('-32.6', '32.6');
    T('57248', '-57248');
    T('-103', '103');
    T('-1.4', '1.4');
    T('228', '-228');
    T('92.8', '-92.8');
    T('3.46e-17', '-0.0000000000000000346');
    T('-15747', '15747');
    T('16.36', '-16.360');
    T('0.00223', '-0.00223');
    T('244', '-244');
    T('3.8', '-3.8');
    T('-604.2', '604.2');
    T('1.03', '-1.03');
    T('1487', '-1487');
    T('7', '-7');
    T('45', '-45.00');
    T('2.55374e-10', '-0.000000000255374');
    T('3', '-3');
    T('-5.5', '5.5');
    T('-5.4', '5.4');
    T('-9', '9');
    T('-1627.2', '1627.2');
    T('1.0805e-16', '-0.00000000000000010805');
    T('-14.0548', '14.0548');
    T('-207137', '207137');
    T('3.8', '-3.8');
    T('-33.4785', '33.4785');
    T('4.28626', '-4.28626');
    T('-4', '4');
    T('-6', '6');
    T('-1', '1');
    T('-44.951', '44.951');
    T('29.7', '-29.7');
    T('-121.17', '121.17');
    T('480', '-480');
    T('-2.696', '2.696');
    T('-3708.62', '3708.62');
    T('2.8', '-2.8');
    T('17842', '-17842');
    T('-3', '3');
    T('-2', '2');
    T('-1.855', '1.855');
    T('246866', '-246866');
    T('-0.0022', '0.0022');
    T('-1', '1');
    T('1283', '-1283');
    T('2.1', '-2.1');
    T('3.289e-12', '-0.000000000003289');
    T('-1656', '1656');
    T('3.9', '-3.9');
    T('1.12', '-1.12');
    T('3.54e-16', '-0.000000000000000354');
    T('-0.001123', '0.001123');
    T('2.06551e-14', '-0.0000000000000206551');
    T('-19319.3', '19319.3');
    T('3', '-3');
    T('-6', '6');
    T('5.747e-17', '-0.00000000000000005747');
    T('-1.756', '1.756');
    T('2.71004e-15', '-0.00000000000000271004');
    T('1.4', '-1.4');
    T('-0.0000019', '0.00000190');
    T('-6', '6');
    T('-31.4', '31.4');
    T('1', '-1');
    T('-39.954', '39.9540');
    T('8.4', '-8.40');
    T('5.3382e-17', '-0.0000000000000000533820');
    T('8.4', '-8.4');
    T('-106', '106');
    T('905', '-905');
    T('-2030.8', '2030.8');
    T('0.19358', '-0.193580');
    T('50057.4', '-50057.4');
    T('8.0731e-15', '-0.0000000000000080731');
    T('2.4', '-2.4');
    T('-1', '1');
    T('0.026038', '-0.026038');
    T('-22', '22');
    T('-2.8', '2.8');
    T('0.00110001', '-0.00110001');
    T('7', '-7');
    T('-705', '705');
    T('-36046', '36046');
    T('2.42', '-2.42');
    T('-1.225', '1.225');
    T('36.8', '-36.8');
    T('6.8926', '-6.8926');
    T('163575', '-163575');
    T('3.29e-16', '-0.000000000000000329');
    T('-3.9612e-20', '0.000000000000000000039612');
    T('6.3', '-6.3');
    T('1.1', '-1.1');
    T('-53', '53');
    T('-6.3', '6.3');
    T('-3.73', '3.73');
    T('5.99e-13', '-0.000000000000599');
    T('-0.0453', '0.0453');
    T('6.2', '-6.2');
    T('5', '-5');
    T('4.85599e-7', '-0.000000485599');
    T('-6.554e-19', '0.0000000000000000006554');
    T('245.2', '-245.20');
    T('-12.557', '12.557');
    T('8.7', '-8.7');
    T('-38.7', '38.7');
    T('1.1291', '-1.1291');
    T('-3', '3');
    T('40533.9', '-40533.9');
    T('135.1', '-135.1');
    T('-213', '213');
    T('-271352', '271352');
    T('-159.9', '159.9');
    T('-103632', '103632');
    T('-0.00000225418', '0.00000225418');
    T('-2.1e-16', '0.00000000000000021');
    T('14.5', '-14.5');
    T('48016', '-48016');
    T('282', '-282.0');
    T('9.3552e-18', '-0.0000000000000000093552');
    T('237', '-237');
    T('-21.1', '21.1');
    T('2.281', '-2.281');
    T('-4.68312', '4.68312');
    T('7', '-7');
    T('6', '-6');
    T('5.3', '-5.3');
    T('-681.586', '681.586');
    T('-1.59e-16', '0.0000000000000001590');
    T('-2.94', '2.94');
    T('-1', '1');
    T('7.03', '-7.03');
    T('5.73608e-13', '-0.000000000000573608');
    T('2', '-2');
    T('-1.26e-18', '0.00000000000000000126');
    T('-1.5e-14', '0.000000000000015');
    T('2', '-2');
    T('-44', '44');
    T('-1.3928', '1.3928');
    T('18811.4', '-18811.4');
    T('6.6', '-6.6');
    T('1.99', '-1.99');
    T('-6.6496e-14', '0.000000000000066496');
    T('27.184', '-27.184');
    T('0.00007614', '-0.00007614');
    T('5478', '-5478.0');
    T('-30.6432', '30.6432');
    T('-108', '108');
    T('-1', '1');
    T('-61', '61');
    T('4', '-4');
    T('-0.032192', '0.032192');
    T('2.6e-8', '-0.000000026');

    Decimal.toExpNeg = Decimal.toExpPos = 0;

    T('-5.0600621890668482322956892808849303e+20', '5.0600621890668482322956892808849303e+20');
    T('7e+0', '-7e+0');
    T('-6.1095374220609e+13', '6.1095374220609e+13');
    T('9.01e+2', '-9.01e+2');
    T('-1.016984074247269470395836690098169093010136836967e+39', '1.016984074247269470395836690098169093010136836967e+39');
    T('-1.497639134680472576e+18', '1.497639134680472576e+18');
    T('-4.1717657571404248e+16', '4.1717657571404248e+16');
    T('8.983272e+1', '-8.983272e+1');
    T('-5.308416e+6', '5.308416e+6');
    T('-2.09764e+3', '2.09764e+3');
    T('-3.83432050166120236679168e+23', '3.83432050166120236679168e+23');
    T('-4.096e+3', '4.096e+3');
    T('2.679971527468745095582058350756311201706813294321409e+51', '-2.679971527468745095582058350756311201706813294321409e+51');
    T('-5.067853299870089529116832768e+2', '5.067853299870089529116832768e+2');
    T('-3.48822062687911109850066182676769e+32', '3.48822062687911109850066182676769e+32');
    T('-1e+0', '1e+0');
    T('4.2773e+0', '-4.2773e+0');
    T('5.8169306081172252508071119604378757744768e+12', '-5.8169306081172252508071119604378757744768e+12');
    T('-1e+0', '1e+0');
    T('1.51655708279450944384385164853883404204414169862685507e+46', '-1.51655708279450944384385164853883404204414169862685507e+46');
    T('-8.1e+1', '8.1e+1');
    T('-1.296e+3', '1.296e+3');
    T('-2.9e+0', '2.9e+0');
    T('-1.764e+3', '1.764e+3');
    T('9.3418332730097368870513138581415704704611459349313e+49', '-9.3418332730097368870513138581415704704611459349313e+49');

    T('-9.99e+9000000000000000', '9.99e+9000000000000000');
    T('9.99e+9000000000000000', '-9.99e+9000000000000000');
    T('-Infinity', '1e+9000000000000001');
    T('Infinity', '-1e+9000000000000001');
    T('-1e-9000000000000000', '1e-9000000000000000');
    T('1e-9000000000000000', '-1e-9000000000000000');
    T('0e+0', '-1e-9000000000000001');





    T('-Infinity', Infinity);
    T('-Infinity', 'Infinity');
    T('Infinity', -Infinity);
    T('Infinity', '-Infinity');
    T('NaN', NaN);
    T('NaN', 'NaN');

    Decimal.toExpNeg = -9e15;
    Decimal.toExpPos = 9e15;

    assert(-1, new Decimal(2).neg().s);
    assert(1, new Decimal(-2).neg().s);
    assert(null, new Decimal(NaN).neg().s);
    assert(null, new Decimal('-NaN').neg().s);
    assert(-1, new Decimal(Infinity).neg().s);
    assert(1, new Decimal('-Infinity').neg().s);

    assert(false, isMinusZero(new Decimal(1).neg()));
    assert(true, isMinusZero(new Decimal(0).neg()));
    assert(true, isMinusZero(new Decimal(0).neg()));
    assert(true, isMinusZero(new Decimal('0.00000').neg()));
    assert(true, isMinusZero(new Decimal('+0.0').neg()));
    assert(false, isMinusZero(new Decimal(-0).neg()));
    assert(false, isMinusZero(new Decimal('-0').neg()));

    log('\n ' + passed + ' of ' + total + ' tests passed in ' + (+new Date() - start) + ' ms \n');
    return [passed, total];
})(this.Decimal);
if (typeof module !== 'undefined' && module.exports) module.exports = count;