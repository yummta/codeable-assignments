require 'uri'

class User < ApplicationRecord
  validates :first_name, length: { in: 2..60 }, presence: true
  validates :last_name, length: { in: 2..60 }, presence: true
  validates :username, length: { in: 2..60 }, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, presence: true, confirmation: true
  validates :password, length: { minimum: 8 }, format: { with: /[0-9]/, message: "Your password must contain at least 1 number" }, confirmation: true
  validates :password_hint, length: { maximum: 100 }, allow_nil: true

  after_validation :formating_lastname

  def full_name
    "#{first_name} #{last_name}"
  end

  def formating_lastname
    self.first_name = self.first_name.capitalize
    self.last_name = self.last_name.downcase.split(" ").map do |word|
      %w(de la del las).include?(word) ? word.downcase : word.capitalize
    end.join(" ")
  end

end
