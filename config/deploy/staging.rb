set :stage, :staging
server '192.168.50.22', user: 'vagrant', roles: %w{web app db}, primary: true
