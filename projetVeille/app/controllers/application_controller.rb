class ApplicationController < ActionController::API
    include Response
    include ExceptionHandler

    # called before every action on controllers
    before_action :authorize_request
    attr_reader :current_user

    private

    # Check for valid request token and return user
    def authorize_request
        @current_user = (AuthorizeApiRequest.new(request.headers).call)[:user]
    end

    # À chaque appel, l'application vérifiera la demande en appelant le service d'autorisation de demande.
    # Si la demande est autorisée, l'objet current_user sera utilisé dans les autres contrôleurs.
end
