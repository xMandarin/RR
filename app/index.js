import './main.scss';
import './plugin.js';
import $ from 'jquery';
import 'imports?jQuery=jquery!./plugin.js';

let json = require("json!./data/data.json");

window.$ = $;
let ready = function(){
    $('.jumbotron').each(function(i, e){
        let id = $(e).attr('id');

        $(`#${id}`).find('h1').text(json.stages[id].title);
        $(`#${id}`).find('p').text(json.stages[id].text);
    });

    $('.setup-panel a').on('click', function(e){ e.preventDefault(); });

    $('.next').on('click', function(e){
        let isValid = true,
            $target = $(e.target),
            $current = $target.parents('.jumbotron'),
            currentId = $current.attr('id'),
            curInputs = $current.find('input'),
            nextId = $target.attr('data-id');

        $('.form-group').removeClass('has-error');

        $(curInputs).each(function(i, e){
            if (!e.validity.valid){
                isValid = false;
                $(e).closest('.form-group').addClass('has-error');
            }
        });

        if (isValid) {
            $('.jumbotron').addClass('hidden');
            $(`#${nextId}`).removeClass('hidden');
            $(`a[href="#${nextId}"]`).removeClass('disabled');
            $(`a[href="#${currentId}"]`).addClass('compleate');
            if(nextId === 'finish'){
                $('form').submit();
            }
        } else {
            alert('Please enter valid data');
        }
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        let data = $(this).serialize();
        alert('All data in conlole');
        console.log(`This is data: ${data}`);
    });

    $('select[name="country"]').on('change', function(e){
        let val = $(e.target).val(),
            newPattern = $.fn.zipPattern(val);
        $('input[name="postalCode"]').attr('pattern','');
        $('input[name="postalCode"]').attr('pattern', newPattern);
    });

    $('input').on('focus', function(e){
        let $target = $(e.target),
            $parrent = $target.closest('.form-group');

        if ($parrent.hasClass('has-error')) $parrent.removeClass('has-error');
    });

    $("form").validator();
    $('select').select2();
};

$(document).ready(ready);