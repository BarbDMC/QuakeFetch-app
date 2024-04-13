class FeatureSerializer < ActiveModel::Serializer
  attribute :id
  attribute :external_id
  attribute :magnitude
  attribute :place
  attribute :time do
    object.time.strftime("%F %T")
  end
  attribute :tsunami
  attribute :mag_type
  attribute :title
  attribute :coordinates do
    { longitude: object.longitude, latitude: object.latitude }
  end
  attribute :links do
    { external_url: object.url }
  end

  def id
    object.id
  end

  def type
    "feature"
  end
end
