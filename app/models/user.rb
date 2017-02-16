# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  display_name    :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  validates :display_name, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true
  validate :valid_email?
  attr_reader :password
  before_validation :ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def valid_email?
    unless self.email and self.email.split("@").length == 2
      errors[:email]  << "not valid"
    end
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(credentials)
    user = User.find_by(email: credentials[:email])
    user && user.is_password?(credentials[:password]) ? user : nil
  end

  has_many :questions,
  foreign_key: :author_id

  has_many :answers,
  foreign_key: :author_id
end
