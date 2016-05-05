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

function add_nova_tarefa() {
  if(jQuery('#tasks').find('tbody').length < 1) {
    jQuery('#tasks').append( "<tbody><tr class='fields'><td><input type='text' id='project_tasks_attributes_" + (jQuery('#tasks').find('tr').length+1) + "_number' name='project[task_attributes][" + (jQuery('#tasks').find('tr').length+1) + "][number]' value='" + jQuery('#number_task').val() + "'/></td><td><input type='text' id='project_tasks_attributes_" + (jQuery('#tasks').find('tr').length+1) + "_name' name='project[task_attributes][" + (jQuery('#tasks').find('tr').length+1) + "][name]' value='" + jQuery('#name_task').val() + "'/></td></tr></tbody>" );
  } else {
    jQuery('#tasks').find('tbody').append( "<tr class='fields'><td>" + jQuery('#number_task').val() + "<input type='hidden' id='project_tasks_attributes_" + (jQuery('#tasks').find('tr').length+1) + "_number' name='project[task_attributes][" + (jQuery('#tasks').find('tr').length+1) + "][number]' value='" + jQuery('#number_task').val() + "'/></td><td>" + jQuery('#name_task').val() + "<input type='hidden' id='project_tasks_attributes_" + (jQuery('#tasks').find('tr').length+1) + "_name' name='project[task_attributes][" + (jQuery('#tasks').find('tr').length+1) + "][name]' value='" + jQuery('#name_task').val() + "'/></td></tr>" );
  }
}
