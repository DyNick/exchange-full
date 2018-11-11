

$(document).ready(function() {
    /*default value*/
    var selected_option = $('select option:selected').attr('value');
    $('.center').find('#sources').attr('placeholder',selected_option);
        var btcUsd = ('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC' +  selected_option);
        var ethUsd= ('https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH' +  selected_option);
        var ltcUsd = ('https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC' + selected_option);
        $.get(ethUsd ,
            function(data){

                var dataAsString = JSON.stringify(data.changes.price.hour);
                var dataAsString1 = JSON.stringify(data.changes.price.day);
                var dataAsString2 = JSON.stringify(data.changes.price.week);
                var dataAsString3 = JSON.stringify(data.changes.price.month);
                var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);

                if (data.changes.price.hour < 0) {
                    $('.card-container__item--eth .value-box-percent--hour').css('color', 'red');
                    $('.card-container__item--eth .value-box-many--hour').css('color', 'red');
                }
                if (data.changes.price.day < 0) {
                    $('.card-container__item--eth .value-box-percent--day').css('color', 'red');
                    $('.card-container__item--eth .value-box-many--day').css('color', 'red');
                }
                else if (data.changes.price.week < 0) {
                    $('.card-container__item--eth .value-box-percent--week').css('color', 'red');
                    $('.card-container__item--eth .value-box-many--week').css('color', 'red');
                }
                else if (data.changes.price.month < 0) {
                    $('.card-container__item--eth .value-box-percent--month').css('color', 'red');
                    $('.card-container__item--eth .value-box-many--month').css('color', 'red');
                }
                else {
                    $('.card-container__item--eth .value-box-percent').css('color', 'green');
                    $('.card-container__item--eth .value-box-many').css('color', 'green');
                }


                $('.card-container__item--eth .value-box-percent--hour').text(dataAsString+"$");
                $('.card-container__item--eth .value-box-percent--day').text(dataAsString1+"$");
                $('.card-container__item--eth .value-box-percent--week').text(dataAsString2+"$");
                $('.card-container__item--eth .value-box-percent--month').text(dataAsString3+"$");
                $('.card-container__item--eth .value-box-many--hour').text(dataAsStringPercent+"%");
                $('.card-container__item--eth .value-box-many--day').text(dataAsStringPercent1+"%");
                $('.card-container__item--eth .value-box-many--week').text(dataAsStringPercent2+"%");
                $('.card-container__item--eth .value-box-many--month').text(dataAsStringPercent3+"%");

            });

        $.get(ltcUsd ,
            function(data){
                console.log(data);
                var dataAsString = JSON.stringify(data.changes.price.hour);
                var dataAsString1 = JSON.stringify(data.changes.price.day);
                var dataAsString2 = JSON.stringify(data.changes.price.week);
                var dataAsString3 = JSON.stringify(data.changes.price.month);
                var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);
                if(data.changes.price.hour < 0){
                    $('.card-container__item--lth .value-box-percent--hour').css('color','red');
                    $('.card-container__item--lth .value-box-many--hour').css('color','red');
                }
                if(data.changes.price.day < 0){
                    $('.card-container__item--lth .value-box-percent--day').css('color','red');
                    $('.card-container__item--lth .value-box-many--day').css('color','red');
                }
                if(data.changes.price.week < 0){
                    $('.card-container__item--lth .value-box-percent--week').css('color','red');
                    $('.card-container__item--lth .value-box-many--week').css('color','red');
                }
                if(data.changes.price.month < 0){
                    $('.card-container__item--lth .value-box-percent--month').css('color','red');
                    $('.card-container__item--lth .value-box-many--month').css('color','red');
                }
                else{
                    $('.card-container__item--lth .value-box-percent').css('color','green');
                    $('.card-container__item--lth .value-box-many').css('color','green');
                }

                $('.card-container__item--lth .value-box-percent--hour').text(dataAsString+"$");
                $('.card-container__item--lth .value-box-percent--day').text(dataAsString1+"$");
                $('.card-container__item--lth .value-box-percent--week').text(dataAsString2+"$");
                $('.card-container__item--lth .value-box-percent--month').text(dataAsString3+"$");
                $('.card-container__item--lth .value-box-many--hour').text(dataAsStringPercent+"%");
                $('.card-container__item--lth .value-box-many--day').text(dataAsStringPercent1+"%");
                $('.card-container__item--lth .value-box-many--week').text(dataAsStringPercent2+"%");
                $('.card-container__item--lth .value-box-many--month').text(dataAsStringPercent3+"%");
            });
        $.get(btcUsd ,
            function(data){
                console.log(data);
                var dataAsString = JSON.stringify(data.changes.price.hour);
                var dataAsString1 = JSON.stringify(data.changes.price.day);
                var dataAsString2 = JSON.stringify(data.changes.price.week);
                var dataAsString3 = JSON.stringify(data.changes.price.month);
                var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);

                if(data.changes.price.hour < 0){
                    $('.card-container__item--btc .value-box-percent--hour').css('color','red');
                    $('.card-container__item--btc .value-box-many--hour').css('color','red');
                }
                if(data.changes.price.day < 0){
                    $('.card-container__item--btc .value-box-percent--day').css('color','red');
                    $('.card-container__item--btc .value-box-many--day').css('color','red');
                }
                else if(data.changes.price.day < 0){
                    $('.card-container__item--btc .value-box-percent--week').css('color','red');
                    $('.card-container__item--btc .value-box-many--week').css('color','red');
                }
                else if(data.changes.price.day < 0){
                    $('.card-container__item--btc .value-box-percent--month').css('color','red');
                    $('.card-container__item--btc .value-box-many--month').css('color','red');
                }
                else{
                    $('.card-container__item--btc .value-box-percent').css('color','green');
                    $('.card-container__item--btc .value-box-many').css('color','green');
                }

                $('.card-container__item--btc .value-box-percent--hour').text(dataAsString+"$");
                $('.card-container__item--btc .value-box-percent--day').text(dataAsString1+"$");
                $('.card-container__item--btc .value-box-percent--week').text(dataAsString2+"$");
                $('.card-container__item--btc .value-box-percent--month').text(dataAsString3+"$");
                $('.card-container__item--btc .value-box-many--hour').text(dataAsStringPercent+"%");
                $('.card-container__item--btc .value-box-many--day').text(dataAsStringPercent1+"%");
                $('.card-container__item--btc .value-box-many--week').text(dataAsStringPercent2+"%");
                $('.card-container__item--btc .value-box-many--month').text(dataAsStringPercent3+"%");
            });
    /*//default value*/

    /*value on select change*/
    $('.custom-option').click(function(){
        var selectVal = $(this).attr('data-value');
        console.log(selectVal);
        if(selectVal == 'USD'){

            var btcUsd = ('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC' + selectVal);
            var ethUsd= ('https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH' + selectVal);
            var ltcUsd = ('https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC' + selectVal);
                $.get(ethUsd ,
                function(data){

                    var dataAsString = JSON.stringify(data.changes.price.hour);
                    var dataAsString1 = JSON.stringify(data.changes.price.day);
                    var dataAsString2 = JSON.stringify(data.changes.price.week);
                    var dataAsString3 = JSON.stringify(data.changes.price.month);
                    var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                    var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                    var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                    var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);

                        if (data.changes.price.hour < 0) {
                            $('.card-container__item--eth .value-box-percent--hour').css('color', 'red');
                            $('.card-container__item--eth .value-box-many--hour').css('color', 'red');
                        }
                         if (data.changes.price.day < 0) {
                            $('.card-container__item--eth .value-box-percent--day').css('color', 'red');
                             $('.card-container__item--eth .value-box-many--day').css('color', 'red');
                        }
                        else if (data.changes.price.week < 0) {
                            $('.card-container__item--eth .value-box-percent--week').css('color', 'red');
                             $('.card-container__item--eth .value-box-many--week').css('color', 'red');
                        }
                        else if (data.changes.price.month < 0) {
                            $('.card-container__item--eth .value-box-percent--month').css('color', 'red');
                             $('.card-container__item--eth .value-box-many--month').css('color', 'red');
                        }
                        else {
                            $('.card-container__item--eth .value-box-percent').css('color', 'green');
                             $('.card-container__item--eth .value-box-many').css('color', 'green');
                        }


                    $('.card-container__item--eth .value-box-percent--hour').text(dataAsString+"$");
                    $('.card-container__item--eth .value-box-percent--day').text(dataAsString1+"$");
                    $('.card-container__item--eth .value-box-percent--week').text(dataAsString2+"$");
                    $('.card-container__item--eth .value-box-percent--month').text(dataAsString3+"$");
                    $('.card-container__item--eth .value-box-many--hour').text(dataAsStringPercent+"%");
                    $('.card-container__item--eth .value-box-many--day').text(dataAsStringPercent1+"%");
                    $('.card-container__item--eth .value-box-many--week').text(dataAsStringPercent2+"%");
                    $('.card-container__item--eth .value-box-many--month').text(dataAsStringPercent3+"%");




                });

                $.get(ltcUsd ,
                function(data){
                    console.log(data);
                    var dataAsString = JSON.stringify(data.changes.price.hour);
                    var dataAsString1 = JSON.stringify(data.changes.price.day);
                    var dataAsString2 = JSON.stringify(data.changes.price.week);
                    var dataAsString3 = JSON.stringify(data.changes.price.month);
                    var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                    var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                    var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                    var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);
                   if(data.changes.price.hour < 0){
                        $('.card-container__item--lth .value-box-percent--hour').css('color','red');
                       $('.card-container__item--lth .value-box-many--hour').css('color','red');
                    }
                     if(data.changes.price.day < 0){
                        $('.card-container__item--lth .value-box-percent--day').css('color','red');
                         $('.card-container__item--lth .value-box-many--day').css('color','red');
                    }
                    if(data.changes.price.week < 0){
                        $('.card-container__item--lth .value-box-percent--week').css('color','red');
                        $('.card-container__item--lth .value-box-many--week').css('color','red');
                    }
                    if(data.changes.price.month < 0){
                        $('.card-container__item--lth .value-box-percent--month').css('color','red');
                        $('.card-container__item--lth .value-box-many--month').css('color','red');
                    }
                    else{
                        $('.card-container__item--lth .value-box-percent').css('color','green');
                        $('.card-container__item--lth .value-box-many').css('color','green');
                    }

                    $('.card-container__item--lth .value-box-percent--hour').text(dataAsString+"$");
                    $('.card-container__item--lth .value-box-percent--day').text(dataAsString1+"$");
                    $('.card-container__item--lth .value-box-percent--week').text(dataAsString2+"$");
                    $('.card-container__item--lth .value-box-percent--month').text(dataAsString3+"$");
                    $('.card-container__item--lth .value-box-many--hour').text(dataAsStringPercent+"%");
                    $('.card-container__item--lth .value-box-many--day').text(dataAsStringPercent1+"%");
                    $('.card-container__item--lth .value-box-many--week').text(dataAsStringPercent2+"%");
                    $('.card-container__item--lth .value-box-many--month').text(dataAsStringPercent3+"%");
                });
                $.get(btcUsd ,
                function(data){
                    console.log(data);
                    var dataAsString = JSON.stringify(data.changes.price.hour);
                    var dataAsString1 = JSON.stringify(data.changes.price.day);
                    var dataAsString2 = JSON.stringify(data.changes.price.week);
                    var dataAsString3 = JSON.stringify(data.changes.price.month);
                    var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                    var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                    var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                    var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);

                    if(data.changes.price.hour < 0){
                        $('.card-container__item--btc .value-box-percent--hour').css('color','red');
                        $('.card-container__item--btc .value-box-many--hour').css('color','red');
                    }
                   if(data.changes.price.day < 0){
                        $('.card-container__item--btc .value-box-percent--day').css('color','red');
                       $('.card-container__item--btc .value-box-many--day').css('color','red');
                    }
                    else if(data.changes.price.day < 0){
                        $('.card-container__item--btc .value-box-percent--week').css('color','red');
                       $('.card-container__item--btc .value-box-many--week').css('color','red');
                    }
                    else if(data.changes.price.day < 0){
                        $('.card-container__item--btc .value-box-percent--month').css('color','red');
                       $('.card-container__item--btc .value-box-many--month').css('color','red');
                    }
                    else{
                        $('.card-container__item--btc .value-box-percent').css('color','green');
                       $('.card-container__item--btc .value-box-many').css('color','green');
                    }

                    $('.card-container__item--btc .value-box-percent--hour').text(dataAsString+"$");
                    $('.card-container__item--btc .value-box-percent--day').text(dataAsString1+"$");
                    $('.card-container__item--btc .value-box-percent--week').text(dataAsString2+"$");
                    $('.card-container__item--btc .value-box-percent--month').text(dataAsString3+"$");
                    $('.card-container__item--btc .value-box-many--hour').text(dataAsStringPercent+"%");
                    $('.card-container__item--btc .value-box-many--day').text(dataAsStringPercent1+"%");
                    $('.card-container__item--btc .value-box-many--week').text(dataAsStringPercent2+"%");
                    $('.card-container__item--btc .value-box-many--month').text(dataAsStringPercent3+"%");
                });

        }
        else if(selectVal == 'EUR'){
            console.log('click2');
            var btcEur = ('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC' + selectVal);
            var ethEur = ('https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH' + selectVal);
            var ltcEur = ('https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC' + selectVal);

            $.get(btcEur ,
                function(data){
                    console.log(data);
                    var dataAsString = JSON.stringify(data.changes.price.hour);
                    var dataAsString1 = JSON.stringify(data.changes.price.day);
                    var dataAsString2 = JSON.stringify(data.changes.price.week);
                    var dataAsString3 = JSON.stringify(data.changes.price.month);
                    var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                    var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                    var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                    var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);

                    if (data.changes.price.hour < 0) {
                        $('.card-container__item--btc .value-box-percent--hour').css('color', 'red');
                        $('.card-container__item--btc .value-box-many--hour').css('color', 'red');
                    }
                    if (data.changes.price.day < 0) {
                        $('.card-container__item--btc .value-box-percent--day').css('color', 'red');
                        $('.card-container__item--btc .value-box-many--day').css('color', 'red');
                    }
                    else if (data.changes.price.week < 0) {
                        $('.card-container__item--btc .value-box-percent--week').css('color', 'red');
                        $('.card-container__item--btc .value-box-many--week').css('color', 'red');
                    }
                    else if (data.changes.price.month < 0) {
                        $('.card-container__item--btc .value-box-percent--month').css('color', 'red');
                        $('.card-container__item--btc .value-box-many--month').css('color', 'red');
                    }
                    else {
                        $('.card-container__item--btc .value-box-percent').css('color', 'green');
                        $('.card-container__item--btc .value-box-many').css('color', 'green');
                    }



                    $('.card-container__item--btc .value-box-percent--hour').text(dataAsString+"EUR");
                    $('.card-container__item--btc .value-box-percent--day').text(dataAsString1+"EUR");
                    $('.card-container__item--btc .value-box-percent--week').text(dataAsString2+"EUR");
                    $('.card-container__item--btc .value-box-percent--month').text(dataAsString3+"EUR");
                    $('.card-container__item--btc .value-box-many--hour').text(dataAsStringPercent+"%");
                    $('.card-container__item--btc .value-box-many--day').text(dataAsStringPercent1+"%");
                    $('.card-container__item--btc .value-box-many--week').text(dataAsStringPercent2+"%");
                    $('.card-container__item--btc .value-box-many--month').text(dataAsStringPercent3+"%");
                });

            $.get(ltcEur ,
                function(data){
                    console.log(data);
                    var dataAsString = JSON.stringify(data.changes.price.hour);
                    var dataAsString1 = JSON.stringify(data.changes.price.day);
                    var dataAsString2 = JSON.stringify(data.changes.price.week);
                    var dataAsString3 = JSON.stringify(data.changes.price.month);
                    var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                    var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                    var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                    var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);


                    if (data.changes.price.hour < 0) {
                        $('.card-container__item--lth .value-box-percent--hour').css('color', 'red');
                        $('.card-container__item--lth .value-box-many--hour').css('color', 'red');
                    }
                    if (data.changes.price.day < 0) {
                        $('.card-container__item--lth .value-box-percent--day').css('color', 'red');
                        $('.card-container__item--lth .value-box-many--day').css('color', 'red');
                    }
                    else if (data.changes.price.week < 0) {
                        $('.card-container__item--lth .value-box-percent--week').css('color', 'red');
                        $('.card-container__item--lth .value-box-many--week').css('color', 'red');
                    }
                    else if (data.changes.price.month < 0) {
                        $('.card-container__item--lth .value-box-percent--month').css('color', 'red');
                        $('.card-container__item--lth .value-box-many--month').css('color', 'red');
                    }
                    else {
                        $('.card-container__item--lth .value-box-percent').css('color', 'green');
                        $('.card-container__item--lth .value-box-many').css('color', 'green');
                    }


                    $('.card-container__item--lth .value-box-percent--hour').text(dataAsString+"EUR");
                    $('.card-container__item--lth .value-box-percent--day').text(dataAsString1+"EUR");
                    $('.card-container__item--lth .value-box-percent--week').text(dataAsString2+"EUR");
                    $('.card-container__item--lth .value-box-percent--month').text(dataAsString3+"EUR");
                    $('.card-container__item--lth .value-box-many--hour').text(dataAsStringPercent+"%");
                    $('.card-container__item--lth .value-box-many--day').text(dataAsStringPercent1+"%");
                    $('.card-container__item--lth .value-box-many--week').text(dataAsStringPercent2+"%");
                    $('.card-container__item--lth .value-box-many--month').text(dataAsStringPercent3+"%");
                });
            $.get(ethEur ,
                function(data){
                    console.log(data);
                    var dataAsString = JSON.stringify(data.changes.price.hour);
                    var dataAsString1 = JSON.stringify(data.changes.price.day);
                    var dataAsString2 = JSON.stringify(data.changes.price.week);
                    var dataAsString3 = JSON.stringify(data.changes.price.month);
                    var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                    var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                    var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                    var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);


                    if (data.changes.price.hour < 0) {
                        $('.card-container__item--eth .value-box-percent--hour').css('color', 'red');
                        $('.card-container__item--eth .value-box-many--hour').css('color', 'red');
                    }
                    if (data.changes.price.day < 0) {
                        $('.card-container__item--eth .value-box-percent--day').css('color', 'red');
                        $('.card-container__item--eth .value-box-many--day').css('color', 'red');
                    }
                    else if (data.changes.price.week < 0) {
                        $('.card-container__item--eth .value-box-percent--week').css('color', 'red');
                        $('.card-container__item--eth .value-box-many--week').css('color', 'red');
                    }
                    else if (data.changes.price.month < 0) {
                        $('.card-container__item--eth .value-box-percent--month').css('color', 'red');
                        $('.card-container__item--eth .value-box-many--month').css('color', 'red');
                    }
                    else {
                        $('.card-container__item--eth .value-box-percent').css('color', 'green');
                        $('.card-container__item--eth .value-box-many').css('color', 'green');
                    }


                    $('.card-container__item--eth .value-box-percent--hour').text(dataAsString+"EUR");
                    $('.card-container__item--eth .value-box-percent--day').text(dataAsString1+"EUR");
                    $('.card-container__item--eth .value-box-percent--week').text(dataAsString2+"EUR");
                    $('.card-container__item--eth .value-box-percent--month').text(dataAsString3+"EUR");
                    $('.card-container__item--eth .value-box-many--hour').text(dataAsStringPercent+"%");
                    $('.card-container__item--eth .value-box-many--day').text(dataAsStringPercent1+"%");
                    $('.card-container__item--eth .value-box-many--week').text(dataAsStringPercent2+"%");
                    $('.card-container__item--eth .value-box-many--month').text(dataAsStringPercent3+"%");



                });


        }
        else if(selectVal == 'RUB'){
            console.log('click3');
            var btcRub = ('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC' + selectVal);
            var ethRub = ('https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH' + selectVal);
            var ltcRub = ('https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC' + selectVal);
            $.get(btcRub ,
                function(data){
                    console.log(data);
                    var dataAsString = JSON.stringify(data.changes.price.hour);
                    var dataAsString1 = JSON.stringify(data.changes.price.day);
                    var dataAsString2 = JSON.stringify(data.changes.price.week);
                    var dataAsString3 = JSON.stringify(data.changes.price.month);
                    var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                    var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                    var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                    var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);
                    if (data.changes.price.hour < 0) {
                        $('.card-container__item--btc .value-box-percent--hour').css('color', 'red');
                        $('.card-container__item--btc .value-box-many--hour').css('color', 'red');
                    }
                    if (data.changes.price.day < 0) {
                        $('.card-container__item--btc .value-box-percent--day').css('color', 'red');
                        $('.card-container__item--btc .value-box-many--day').css('color', 'red');
                    }
                    else if (data.changes.price.week < 0) {
                        $('.card-container__item--btc .value-box-percent--week').css('color', 'red');
                        $('.card-container__item--btc .value-box-many--week').css('color', 'red');
                    }
                    else if (data.changes.price.month < 0) {
                        $('.card-container__item--btc .value-box-percent--month').css('color', 'red');
                        $('.card-container__item--btc .value-box-percent--many').css('color', 'red');
                    }
                    else {
                        $('.card-container__item--btc .value-box-percent').css('color', 'green');
                        $('.card-container__item--btc .value-box-many').css('color', 'green');
                    }



                    $('.card-container__item--btc .value-box-percent--hour').text(dataAsString+"RUB");
                    $('.card-container__item--btc .value-box-percent--day').text(dataAsString1+"RUB");
                    $('.card-container__item--btc .value-box-percent--week').text(dataAsString2+"RUB");
                    $('.card-container__item--btc .value-box-percent--month').text(dataAsString3+"RUB");
                    $('.card-container__item--btc .value-box-many--hour').text(dataAsStringPercent+"%");
                    $('.card-container__item--btc .value-box-many--day').text(dataAsStringPercent1+"%");
                    $('.card-container__item--btc .value-box-many--week').text(dataAsStringPercent2+"%");
                    $('.card-container__item--btc .value-box-many--month').text(dataAsStringPercent3+"%");
                });

            $.get(ltcRub ,
                function(data){
                    console.log(data);
                    var dataAsString = JSON.stringify(data.changes.price.hour);
                    var dataAsString1 = JSON.stringify(data.changes.price.day);
                    var dataAsString2 = JSON.stringify(data.changes.price.week);
                    var dataAsString3 = JSON.stringify(data.changes.price.month);
                    var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                    var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                    var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                    var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);
                    $('.card-container__item--lth .value-box-percent--hour').text(dataAsString+"RUB");
                    $('.card-container__item--lth .value-box-percent--day').text(dataAsString1+"RUB");
                    $('.card-container__item--lth .value-box-percent--week').text(dataAsString2+"RUB");
                    $('.card-container__item--lth .value-box-percent--month').text(dataAsString3+"RUB");
                    $('.card-container__item--lth .value-box-many--hour').text(dataAsStringPercent+"%");
                    $('.card-container__item--lth .value-box-many--day').text(dataAsStringPercent1+"%");
                    $('.card-container__item--lth .value-box-many--week').text(dataAsStringPercent2+"%");
                    $('.card-container__item--lth .value-box-many--month').text(dataAsStringPercent3+"%");
                });
            $.get(ethRub ,
                function(data){
                    console.log(data);
                    var dataAsString = JSON.stringify(data.changes.price.hour);
                    var dataAsString1 = JSON.stringify(data.changes.price.day);
                    var dataAsString2 = JSON.stringify(data.changes.price.week);
                    var dataAsString3 = JSON.stringify(data.changes.price.month);
                    var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                    var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                    var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                    var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);
                    $('.card-container__item--eth .value-box-percent--hour').text(dataAsString+"RUB");
                    $('.card-container__item--eth .value-box-percent--day').text(dataAsString1+"RUB");
                    $('.card-container__item--eth .value-box-percent--week').text(dataAsString2+"RUB");
                    $('.card-container__item--eth .value-box-percent--month').text(dataAsString3+"RUB");
                    $('.card-container__item--eth .value-box-many--hour').text(dataAsStringPercent+"%");
                    $('.card-container__item--eth .value-box-many--day').text(dataAsStringPercent1+"%");
                    $('.card-container__item--eth .value-box-many--week').text(dataAsStringPercent2+"%");
                    $('.card-container__item--eth .value-box-many--month').text(dataAsStringPercent3+"%");
                });


        }
        else if(selectVal == 'GBP'){
            var btcGbp = ('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC' + selectVal);
            var ethGbp = ('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC' + selectVal);
            var ltcGbp = ('https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC' + selectVal);

            $.get(btcGbp ,
                function(data){
                    console.log(data);
                    var dataAsString = JSON.stringify(data.changes.price.hour);
                    var dataAsString1 = JSON.stringify(data.changes.price.day);
                    var dataAsString2 = JSON.stringify(data.changes.price.week);
                    var dataAsString3 = JSON.stringify(data.changes.price.month);
                    var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                    var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                    var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                    var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);
                    if (data.changes.price.hour < 0) {
                        $('.card-container__item--btc .value-box-percent--hour').css('color', 'red');
                        $('.card-container__item--btc .value-box-many--hour').css('color', 'red');
                    }
                    if (data.changes.price.day < 0) {
                        $('.card-container__item--btc .value-box-percent--day').css('color', 'red');
                        $('.card-container__item--btc .value-box-many--day').css('color', 'red');

                    }
                    else if (data.changes.price.week < 0) {
                        $('.card-container__item--btc .value-box-percent--week').css('color', 'red');
                        $('.card-container__item--btc .value-box-many--week').css('color', 'red');
                    }
                    else if (data.changes.price.month < 0) {
                        $('.card-container__item--btc .value-box-percent--month').css('color', 'red');
                        $('.card-container__item--btc .value-box-many--month').css('color', 'red');
                    }
                    else {
                        $('.card-container__item--btc .value-box-percent').css('color', 'green');
                        $('.card-container__item--btc .value-box-many').css('color', 'green');
                    }

                    $('.card-container__item--btc .value-box-percent--hour').text(dataAsString+"GBP");
                    $('.card-container__item--btc .value-box-percent--day').text(dataAsString1+"GBP");
                    $('.card-container__item--btc .value-box-percent--week').text(dataAsString2+"GBP");
                    $('.card-container__item--btc .value-box-percent--month').text(dataAsString3+"GBP");
                    $('.card-container__item--btc .value-box-many--hour').text(dataAsStringPercent+"%");
                    $('.card-container__item--btc .value-box-many--day').text(dataAsStringPercent1+"%");
                    $('.card-container__item--btc .value-box-many--week').text(dataAsStringPercent2+"%");
                    $('.card-container__item--btc .value-box-many--month').text(dataAsStringPercent3+"%");
                });

            $.get(ltcGbp ,
                function(data){
                    console.log(data);
                    var dataAsString = JSON.stringify(data.changes.price.hour);
                    var dataAsString1 = JSON.stringify(data.changes.price.day);
                    var dataAsString2 = JSON.stringify(data.changes.price.week);
                    var dataAsString3 = JSON.stringify(data.changes.price.month);
                    var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                    var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                    var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                    var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);
                    $('.card-container__item--lth .value-box-percent--hour').text(dataAsString+"GBP");
                    $('.card-container__item--lth .value-box-percent--day').text(dataAsString1+"GBP");
                    $('.card-container__item--lth .value-box-percent--week').text(dataAsString2+"GBP");
                    $('.card-container__item--lth .value-box-percent--month').text(dataAsString3+"GBP");
                    $('.card-container__item--lth .value-box-many--hour').text(dataAsStringPercent+"%");
                    $('.card-container__item--lth .value-box-many--day').text(dataAsStringPercent1+"%");
                    $('.card-container__item--lth .value-box-many--week').text(dataAsStringPercent2+"%");
                    $('.card-container__item--lth .value-box-many--month').text(dataAsStringPercent3+"%");
                });
            $.get(ethGbp ,
                function(data){
                    console.log(data);
                    var dataAsString = JSON.stringify(data.changes.price.hour);
                    var dataAsString1 = JSON.stringify(data.changes.price.day);
                    var dataAsString2 = JSON.stringify(data.changes.price.week);
                    var dataAsString3 = JSON.stringify(data.changes.price.month);
                    var dataAsStringPercent = JSON.stringify(data.changes.percent.hour);
                    var dataAsStringPercent1 = JSON.stringify(data.changes.percent.day);
                    var dataAsStringPercent2 = JSON.stringify(data.changes.percent.week);
                    var dataAsStringPercent3 = JSON.stringify(data.changes.percent.month);
                    $('.card-container__item--eth .value-box-percent--hour').text(dataAsString+"GBP");
                    $('.card-container__item--eth .value-box-percent--day').text(dataAsString1+"GBP");
                    $('.card-container__item--eth .value-box-percent--week').text(dataAsString2+"GBP");
                    $('.card-container__item--eth .value-box-percent--month').text(dataAsString3+"GBP");
                    $('.card-container__item--eth .value-box-many--hour').text(dataAsStringPercent+"%");
                    $('.card-container__item--eth .value-box-many--day').text(dataAsStringPercent1+"%");
                    $('.card-container__item--eth .value-box-many--week').text(dataAsStringPercent2+"%");
                    $('.card-container__item--eth .value-box-many--month').text(dataAsStringPercent3+"%");
                });
        }
    });

});
/*value on select change*/



/////////////////////CUSTOM SELECT///////////////////////
 $(".custom-select").each(function() {
     var classes = $(this).attr("class"),
         id      = $(this).attr("id"),
         name    = $(this).attr("name");
     var template =  '<div class="' + classes + '">';
     template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
     template += '<div class="custom-options">';
     $(this).find("option").each(function() {
         template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
     });
     template += '</div></div>';

     $(this).wrap('<div class="custom-select-wrapper"></div>');
     $(this).hide();
     $(this).after(template);
 });
 $(".custom-option:first-of-type").hover(function() {
     $(this).parents(".custom-options").addClass("option-hover");
 }, function() {
     $(this).parents(".custom-options").removeClass("option-hover");
 });
 $(".custom-select-trigger").on("click", function() {
     $('html').one('click',function() {
         $(".custom-select").removeClass("opened");
     });
     $(this).parents(".custom-select").toggleClass("opened");
     event.stopPropagation();
 });
 $(".custom-option").on("click", function() {
     $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
     $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
     $(this).addClass("selection");
     $(this).parents(".custom-select").removeClass("opened");
     $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
 });

$(document).ready(function() {
 /////////////////CHECKBOX/////////////////////////
 var checkboxes =$('.card-container').find($( ':checkbox' ));
$(checkboxes).prop( 'checked', false );
console.log('find');
 $('.checkbox-slide').click(function () {
     console.log('click');
     if ( $(this).is(':checked')) {
         $(this).closest("div").addClass('active');
         $(this).closest('.card-container__item').find(".value-box-percent--hour").hide();
         $(this).closest('.card-container__item').find(".value-box-many--hour").show();
         $(this).closest('.card-container__item').find(".value-box-percent--day").hide();
         $(this).closest('.card-container__item').find(".value-box-many--day").show();
         $(this).closest('.card-container__item').find(".value-box-percent--week").hide();
         $(this).closest('.card-container__item').find(".value-box-many--week").show();
         $(this).closest('.card-container__item').find(".value-box-percent--month").hide();
         $(this).closest('.card-container__item').find(".value-box-many--month").show();
         console.log('active');
     } else {
         $(this).closest("div").removeClass('active');
         $(this).closest('.card-container__item').find(".value-box-percent--hour").show();
         $(this).closest('.card-container__item').find(".value-box-many--hour").hide();
         $(this).closest('.card-container__item').find(".value-box-percent--day").show();
         $(this).closest('.card-container__item').find(".value-box-many--day").hide();
         $(this).closest('.card-container__item').find(".value-box-percent--week").show();
         $(this).closest('.card-container__item').find(".value-box-many--week").hide();
         $(this).closest('.card-container__item').find(".value-box-percent--month").show();
         $(this).closest('.card-container__item').find(".value-box-many--month").hide();
         console.log('not-active');
     }
 })
})


/*

$(document).ready(function() {
   $(window).on("resize", function() {
        $(window).height() <= 1200? ($(".card-container").addClass("card-container-carousel"),
            $(".card-container").addClass("owl-carousel")) : ($(".card-container").removeClass("card-container-carousel"),
            $(".card-container").removeClass("owl-carousel"))
    }).trigger("resize");
    $(".card-container-carousel").owlCarousel({
        loop: 1,
        nav: 1,
        items: 3,
        navText: ['<svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg>', '<svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg>'],
        navSpeed: 500,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            700: {
                items: 2
            },
            998: {
                items: 3
            }
        }
    })

})*/
