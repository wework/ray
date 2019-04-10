if [ "${CIRCLE_BRANCH}" != "master" ];
then
  npx chromatic test "${@}"
else
  # We know any changes that make it to master *must* have been approved
  npx chromatic test --auto-accept-changes "${@}"
fi
