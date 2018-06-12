
$( document ).ready( () => {
  $('#submitForm').click((event) => {

    $('#introDetails').css('display') != 'none' ? toggleSection('btnIntro', '#introDetails') : null;

    $('#results').attr('style', 'visibility:hidden');

    $('#generatedSamples').empty();

    $('div#loader').append(
      $('<div/>')
        .attr('class', 'loader')
    );

    $.ajax(
      {
        type: 'post',
        url: '/inputPars',
        data: $('form').serialize(),
        dataType: 'json'
      })
      .done(( json ) => {
        $('#generatedSamples').append('<ul/>');

        for (var j=0; j < json.length; j++){
          $('<li>').appendTo($('#generatedSamples>ul')).text(json[j]);
        }

        $('#results').attr('style', 'visibility:visible');
      })
      .fail(( xhr, status, err) => {console.log(err)})
      .always((xhr, status) => {
        //close loader at completion of AJAX request
        $('div#loader').empty();
      })
  })
})
