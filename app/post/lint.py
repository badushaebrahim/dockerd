from pylint.lint import Run

results = Run(['task.py'], do_exit=False)
# `exit` is deprecated, use `do_exit` instead
# print(results)