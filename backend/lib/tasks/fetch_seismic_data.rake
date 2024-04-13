require 'net/http'
require 'json'

namespace :seismic do
  desc "Fetch seismic data from USGS"
  task fetch_data: :environment do
    url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
    response = Net::HTTP.get(URI(url))
    data = JSON.parse(response)
    puts "Fetching data from USGS..."

    data["features"].each do |feature|
      earthquake = Feature.new(
        external_id: feature["id"],
        magnitude: feature.dig("properties", "mag"),
        place: feature.dig("properties", "place"),
        time: Time.at(feature.dig("properties", "time") / 1000),
        tsunami: feature.dig("properties", "tsunami"),
        mag_type: feature.dig("properties", "magType"),
        title: feature.dig("properties", "title"),
        url: feature.dig("properties", "url"),
        longitude: feature.dig("geometry", "coordinates")[0],
        latitude: feature.dig("geometry", "coordinates")[1]
      )

      if earthquake.save
        puts "Saved: #{earthquake.external_id}"
      else
        puts "Failed to save: #{earthquake.errors.full_messages.join(", ")}"
      end
    end

    puts "Total features processed: #{data["features"].size}"
  end
end
