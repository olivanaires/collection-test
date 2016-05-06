module ProjectsHelper

  def build_tasts_table(task, index)
    content_tag(:tr, :class => "fields" ) do
      task_td = tag("input", id: "project_tasks_attributes_#{index}_id", type: "hidden", name: "project[tasks_attributes][#{index}][id]", value: "#{task.id}")
      task_td << content_tag(:td) do
        child_tag = concat "#{task.number}"
        child_tag << tag("input", type: 'hidden', id: "project_tasks_attributes_#{index}_number", name: "project[tasks_attributes][#{index}][number]", value: "#{task.number}")
      end
      task_td << content_tag(:td) do
        child_tag = concat "#{task.name}"
        child_tag << tag("input", type: 'hidden', id: "project_tasks_attributes_#{index}_name", name: "project[tasks_attributes][#{index}][name]", value: "#{task.name}")
      end
      task_td << content_tag(:td) do
        child_tag = tag("input", type: 'hidden', id: "project_tasks_attributes_#{index}_destroy", name: "project[tasks_attributes][#{index}][_destroy]", value: "false")
        child_tag << tag("a", href: "javascript:void(0)", data: {remote: "true"}, onclick: "remove_task(this)", class: "remove_task")
        child_tag << "Remover"
      end
    end
  end

end
