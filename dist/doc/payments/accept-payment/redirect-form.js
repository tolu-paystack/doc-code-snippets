const html = `<form action="/save-order-and-pay" method="POST"> 
  <input type="hidden" name="user_email" value="<?php echo $email; ?>"> 
  <input type="hidden" name="amount" value="<?php echo $amount; ?>"> 
  <input type="hidden" name="cartid" value="<?php echo $cartid; ?>"> 
  <button type="submit" name="pay_now" id="pay-now" title="Pay now">Pay now</button>
</form>`

export {html}