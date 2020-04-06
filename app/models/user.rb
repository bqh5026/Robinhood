class User < ApplicationRecord

    #FGRIPE

    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader: :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCypt::Password(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save!
        self.session_token
    end
    
    private

    def ensure_session_token
        self.session_token ||= SecureRandom::base64(64)
    end

end
