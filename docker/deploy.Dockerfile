FROM howdoicomputer/node-devenv

ENV HOME /home/dev
ENV APP_NAME calidrought

USER root

ADD . $HOME/$APP_NAME
RUN chown -R dev: $HOME/$APP_NAME

USER dev
WORKDIR $HOME/$APP_NAME
RUN [ "/usr/bin/zsh", "-c", "source /home/dev/.zshrc && npm install" ]
