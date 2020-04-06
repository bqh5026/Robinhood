# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_watchlists_on_user_id  (user_id) UNIQUE
#
class Watchlist < ApplicationRecord
end
