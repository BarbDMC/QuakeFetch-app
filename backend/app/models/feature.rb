class Feature < ApplicationRecord
  has_many :comments, dependent: :destroy

  validates :title, :url, :place, :mag_type, :longitude, :latitude, presence: true
  validates :magnitude, inclusion: -1.0..10.0
  validates :latitude, inclusion: -90.0..90.0
  validates :longitude, inclusion: -180.0..180.0
  validates :external_id, uniqueness: true
end