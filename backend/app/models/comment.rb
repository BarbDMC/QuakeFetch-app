class Comment < ApplicationRecord
  belongs_to :feature
  validates :body, presence: true, length: { minimum: 5 }
end