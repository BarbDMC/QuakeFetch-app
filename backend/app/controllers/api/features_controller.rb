module Api
  class FeaturesController < ApplicationController
    MAX_PER_PAGE = 1000
    DEFAULT_PER_PAGE = 25

    def index
      features = Feature.where(filter_params).page(params[:page]).per(per_page_limit)
      render json: {
        data: ActiveModelSerializers::SerializableResource.new(features, each_serializer: FeatureSerializer),
        pagination: {
          current_page: features.current_page,
          total: features.total_count,
          per_page: features.limit_value
        }
      }
    end

    def show
      feature = Feature.find(params[:id])
      render json: feature, serializer: FeatureSerializer
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Feature not found' }, status: :not_found
    end

    def create_comment
      feature = Feature.find(params[:feature_id])
      comment = feature.comments.new(body: comment_params[:body])
    
      if comment.save
        render json: comment, status: :created
      else
        render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
    private
    
    def comment_params
      params.require(:comment).permit(:body)
    end

    def filter_params
      params.permit(filters: [:mag_type])[:filters] || {}
    end

    def per_page_limit
      per_page = params[:per_page].present? ? params[:per_page].to_i : DEFAULT_PER_PAGE
      [per_page, MAX_PER_PAGE].min
    end

  end
end
