function checkForm(form)
  {
    // validation fails if the input is blank
    if(form.testName.value == "") {
      alert("Error: TestName is empty!");
      form.testName.focus();
      return false;
    }else if(form.testDate.value == "") {
      alert("Error: TestDate is empty!");
      form.testDate.focus();
      return false;
    }else if(form.boosterCount.value == "") {
      alert("Error: RocketBooster is empty!");
      form.boosterCount.focus();
      return false;
    }else if(form.windRating.value == "") {
      alert("Error: WindRating is empty!");
      form.windRating.focus();
      return false;
    }else if(form.productionServers.value == "") {
      alert("Error: ProductionServers is empty!");
      form.productionServers.focus();
      return false;
    }

    // validation was successful
    return true;
  }