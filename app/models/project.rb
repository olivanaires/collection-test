class Project < ActiveRecord::Base
  has_many :tasks, dependent: :destroy
  accepts_nested_attributes_for :tasks, reject_if:  :reject_project, allow_destroy: true

  def reject_project(attr)
    attr["name"].blank?
  end
end
