module ProjectsHelper

  def build_tasts_table(task, index)
    content_tag(:tr, :class => "fields" ) do
      task_td = content_tag(:td) do
        td_tag = concat "#{task.number}"
        td_tag << tag("input", type: 'hidden', id: "project_tasks_attributes_#{index}_number", name: "project[tasks_attributes][#{index}][number]", value: "#{task.number}")
      end
      task_td << content_tag(:td, task.name) do
        td_tag = concat "#{task.name}"
        td_tag << tag("input", type: 'hidden', id: "project_tasks_attributes_#{index}_number", name: "project[tasks_attributes][#{index}][number]", value: "#{task.name}")
      end
    end
  end

end
