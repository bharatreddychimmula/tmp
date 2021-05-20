from tabulate import tabulate

table = []
table.append([1,'PASSED','FAILED','NA'])
table.append([2,'PASSED','PASSED','NA'])
table.append([3,'PASSED','FAILED','PASSED'])
table.append([4,'PASSED','FAILED','FAILED'])
table.append([5,'FAILED','FAILED','NA'])

with open("/Users/chimmulab/sample.html", "w") as f:
  f.write(tabulate(table, ['ID', 'S1', 'S2', 'S3'], tablefmt="unsafehtml"))
  with open("html_view.js") as h:
      f.write("<script>{0}</script>".format(h.read()))
  
