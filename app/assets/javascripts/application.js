// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function add_task() {
  if(jQuery('#tasks').find('tbody').length < 1) {
    jQuery('#tasks').append( "<tbody>"+
      "<tr class='fields'>"+
        "<td>" +
          jQuery('#number_task').val() +
          "<input type='hidden' id='project_tasks_attributes_" +
              (jQuery('#tasks').find('tr').length-1) + "_number' name='project[tasks_attributes][" +
              (jQuery('#tasks').find('tr').length-1) + "][number]' value='" +
              jQuery('#number_task').val() + "'/>"+
        "</td>"+
        "<td>" +
          jQuery('#name_task').val() +
          "<input type='hidden' id='project_tasks_attributes_" +
              (jQuery('#tasks').find('tr').length-1) + "_name' name='project[tasks_attributes][" +
              (jQuery('#tasks').find('tr').length-1) + "][name]' value='" +
              jQuery('#name_task').val() + "'/>"+
        "</td>"+
        "<td>"+
          "<input type='hidden' id='project_tasks_attributes_" +
              (jQuery('#tasks').find('tr').length-1) + "_destroy' name='project[tasks_attributes][" +
              (jQuery('#tasks').find('tr').length-1) + "][_destroy]' value='false'/>"+
          "<a href='' data-remote='true' onclick='remove_task(this)' class='remove_task'>Remover</a>"+
        "</td>"+
      "</tr></tbody>" );
  } else {
    jQuery('#tasks').find('tbody').append(
        "<tr class='fields'>"+
          "<td>" +
            jQuery('#number_task').val() +
            "<input type='hidden' id='project_tasks_attributes_" +
                (jQuery('#tasks').find('tr').length-1) + "_number' name='project[tasks_attributes][" +
                (jQuery('#tasks').find('tr').length-1) + "][number]' value='" +
                jQuery('#number_task').val() + "'/>"+
          "</td>"+
          "<td>" +
            jQuery('#name_task').val() +
            "<input type='hidden' id='project_tasks_attributes_" +
                (jQuery('#tasks').find('tr').length-1) + "_name' name='project[tasks_attributes][" +
                (jQuery('#tasks').find('tr').length-1) + "][name]' value='" +
                jQuery('#name_task').val() + "'/>"+
          "</td>"+
          "<td>"+
            "<input type='hidden' id='project_tasks_attributes_" +
                (jQuery('#tasks').find('tr').length-1) + "_destroy' name='project[tasks_attributes][" +
                (jQuery('#tasks').find('tr').length-1) + "][_destroy]' value='false'/>"+
            "<a href='javascript:void(0)' data-remote='true' onclick='remove_task(this)' class='remove_task'>Remover</a>"+
          "</td>"+
        "</tr>" );
  }
  jQuery('#number_task').val("")
  jQuery('#name_task').val("")
}

function remove_task(event) {
  jQuery(event).parents("tr:first").hide()
  jQuery(event).parents("td:first").find("input").val(1)
}
