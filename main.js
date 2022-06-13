
// $(".wrap").hide(0)

$("#card_adventures").hide(0)
$("#card_shooter").hide(0)
$("#card_action").hide(0)
$("#like").hide(0)
$("#description").hide(0)
$(".game_info").hide(0)
$("#btn_close").hide(0)
$("#btn_to_basket").hide(0)
$("#dark_mode_img").hide(0)
$(".login").hide(0)
$(".buy_page").hide(0)
$("#open_eye").hide(0)
$("#btn_user_account").hide(0)
$("#user_man_circle").hide(0)
$("#user_woman_circle").hide(0)
$(".user_account").hide(0)
$(".basket").hide(0)
$(".rate_me").hide(0)
$("#btn_buy").hide(0)

let number_purchases = 0
let summary = 0
let top_sales = 4
let adventures = 4
let shooter = 4
let action = 4

$("#number_purchases").html(number_purchases)
$("#ammount").html(summary + " ₴")
$("#categorie_choose_span_top_sales").html(top_sales)
$("#categorie_choose_span_adventures").html(adventures)
$("#categorie_choose_span_shooter").html(shooter)
$("#categorie_choose_span_action").html(action)

$("#top_sales").click(function() {

	$("#card_top_sales").show(300)
	$("#card_adventures").hide(0)
	$("#card_shooter").hide(0)
	$("#card_action").hide(0)

	$("#top_sales").addClass("categorie_choose_item_active")
	$("#adventures").removeClass("categorie_choose_item_active")
	$("#shooter").removeClass("categorie_choose_item_active")
	$("#action").removeClass("categorie_choose_item_active")

})

$("#adventures").click(function() {

	$("#card_top_sales").hide(0)
	$("#card_adventures").show(300)
	$("#card_shooter").hide(0)
	$("#card_action").hide(0)

	$("#top_sales").removeClass("categorie_choose_item_active")
	$("#adventures").addClass("categorie_choose_item_active")
	$("#shooter").removeClass("categorie_choose_item_active")
	$("#action").removeClass("categorie_choose_item_active")

})

$("#shooter").click(function() {

	$("#card_top_sales").hide(0)
	$("#card_adventures").hide(0)
	$("#card_shooter").show(300)
	$("#card_action").hide(0)

	$("#top_sales").removeClass("categorie_choose_item_active")
	$("#adventures").removeClass("categorie_choose_item_active")
	$("#shooter").addClass("categorie_choose_item_active")
	$("#action").removeClass("categorie_choose_item_active")

})

$("#action").click(function() {

	$("#card_top_sales").hide(0)
	$("#card_adventures").hide(0)
	$("#card_shooter").hide(0)
	$("#card_action").show(300)

	$("#top_sales").removeClass("categorie_choose_item_active")
	$("#adventures").removeClass("categorie_choose_item_active")
	$("#shooter").removeClass("categorie_choose_item_active")
	$("#action").addClass("categorie_choose_item_active")

})

let dark_mode = 0

$("#dark_light_mode").click(function() {

	if ( dark_mode === 0) {

		$(".dark_light_mode").addClass("dark_light_mode_active")
		$(".dark_light_mode_circle").addClass("dark_light_mode_circle_active")
		$("#dark_mode_img").show(0)
		$("#light_mode_img").hide(0)

		$("#light_mode").removeClass("dark_mode_active")
		$("#dark_mode").addClass("dark_mode_active")
		$(".header").css("background-color", "#0154F5")
		$("body").css("background-color", "#0B1ADE")
		$(".basket_header").css("background", "#0154F5")

		dark_mode = 1

	} else if (dark_mode === 1) {

		$(".dark_light_mode").removeClass("dark_light_mode_active")
		$(".dark_light_mode_circle").removeClass("dark_light_mode_circle_active")
		$("#dark_mode_img").hide(0)
		$("#light_mode_img").show(0)

		$("#light_mode").addClass("dark_mode_active")
		$("#dark_mode").removeClass("dark_mode_active")
		$(".header").css("background-color", "#0C8EE8")
		$("body").css("background-color", "#0C58F2")
		$(".basket_header").css("background", "#0C8EE8")

		dark_mode = 0

	}

})

$("#btn_description").click(function() {

	$("#description").slideDown(500)
	$("body").css("background-color", "")

})

$("#icon_close").click(function() {

	$("#description").slideUp(500)

})

$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)

$("#playstation_img").hide(0)
$("#xbox_img").hide(0)

let basket = 0

$("#mortal_combat_XL_PS").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#mortal_combat_XL_img").show(300)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра Mortal Kombat XL Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("549 ₴")

	basket = 0

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#gta_V_PS").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#gta_V_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра Grand Theft Auto V Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("НОВИЙ")
	$("#game_price").html("749 ₴")

	basket = 1

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#mortal_combat_11_XBOX").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#mortal_combat_11_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра Mortal Kombat 11 XBOX One")
	$("#xbox_img").show(0)
	$("#playstation_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("749 ₴")

	basket = 2

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#mortal_combat_X_PS").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#mortal_combat_X_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра Mortal Kombat X Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("499 ₴")

	basket = 3

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#days_gone_PS").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#days_gone_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра Days Gone Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("НОВИЙ")
	$("#game_price").html("599 ₴")

	basket = 4

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#death_stranding_PS").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#death_stranding_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра Death Stranding Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("999 ₴")

	basket = 5

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#detroit_PS").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#detroit_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра Detroit: Become Human Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("999 ₴")

	basket = 6

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#ratched_PS").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#ratched_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра Ratched & Clank Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("299 ₴")

	basket = 7

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#gta_V_XBOX").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#gta_V_xbox_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра Grand Theft Auto V XBOX One")
	$("#xbox_img").show(0)
	$("#playstation_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("649 ₴")

	basket = 8

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#gta_IV_PS").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#gta_IV_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра Grand Theft Auto IV Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("229 ₴")

	basket = 9

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#battlefield_XBOX").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#battlefield_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра Battlefield 4 XBOX 360")
	$("#xbox_img").show(0)
	$("#playstation_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("179 ₴")

	basket = 10

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#gta_SA_PS").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#gta_SA_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра GTA San Andreas PlayStation 3")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("699 ₴")

	basket = 11

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#god_of_war_PS").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#god_of_war_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра God Of War PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("449 ₴")

	basket = 12

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#horizen_zero_dawn_PS").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#horizen_zero_dawn_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра Horizen Zero Dawn Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("149 ₴")

	basket = 13

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#RDR_2_PS").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#RDR_2_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#the_last_of_us_img").hide(0)
	$(".game_name").html("Гра Red Dead Redemption 2 PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("НОВИЙ")
	$("#game_price").html("999 ₴")

	basket = 14

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#the_last_of_us_PS").click(function() {

	$(".wrap").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)
	$("#btn_to_basket").show(100)

	$("#the_last_of_us_img").show(300)
	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
	$(".game_name").html("Гра The Last Of Us 2 PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("НОВИЙ")
	$("#game_price").html("999 ₴")

	basket = 15

	$("#btn_buy").show(0)
	$("#btn_description").css("margin-left", "0px")

})

$("#btn_close").click(function() {

	$(".wrap").show(0)
	$(".buy_page").hide(0)

	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)

})

$("#btn_user").click(function() {

	$(".login").slideDown(500)

})

$("#icon_close_login").click(function() {

	$(".login").slideUp(500)

})

$("#input_login").click(function() {

	$("#input_login").css("border", "3px solid #5DE80C")
	$(".input_password_container").css("border", "3px solid #444")

})

$("#input_password").click(function() {

	$(".input_password_container").css("border", "3px solid #5DE80C")
	$("#input_login").css("border", "3px solid #444")

})

$("#close_eye").click(function() {

	$("#open_eye").show(0)
	$("#close_eye").hide(0)

})

$("#open_eye").click(function() {

	$("#close_eye").show(0)
	$("#open_eye").hide(0)

})

let users = []

$("#btn_enter").click(function() {

	let login_info = input_login.value
	let password_info = input_password.value

	if (checkEmpty(login_info, password_info) && checkLen(password_info) && checkLow(password_info) && checkUpper(password_info) && checkNumber(password_info)) {

		$(".login").slideUp(500)

		$("#btn_user_account").show(250)
		$("#btn_user").hide(250)

		input_login.value = ""
		input_password.value = ""

		$("#user_login").html(login_info)
		$("#user_password").html(password_info)

	} else {

		$(".password_rules").css("color", "#E80C22")

	}

})

function checkEmpty(login, password) {

	if (login && password) {

		return true

	} else {

		return false

	}

}

function checkLen(password) {

	if (password.length < 8) {

		return false

	} else {

		return true

	}

}

function checkLow(password) {

	let countL = 0

	for (let i = 0; i < password.length; i++) {

		if (password[i] === password[i].toLowerCase()) {

			countL++

		}

	}

	if (countL === 0) {

		return false

	} else {

		return true

	}

}

function checkUpper(password) {

	let countL = 0

	for (let i = 0; i < password.length; i++) {

		if (password[i] === password[i].toUpperCase()) {

			countL++

		}

	}

	if (countL === 0) {

		return false

	} else {

		return true

	}

}

function checkNumber(password) {

	let count = 0

	let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

	for (let i = 0; i < password.length; i++) {

		for (let j = 0; j < password.length; j++) {

			if (password[i] === number[j]) {

				count++

			}

		}

	}

	if (count === 0) {

		return false;

	} else {

		return true;

	}

}

$("#user_man").click(function() {

	$("#user_man_circle").show(0)
	$("#user_woman_circle").hide(0)

})

$("#user_woman").click(function() {

	$("#user_man_circle").hide(0)
	$("#user_woman_circle").show(0)

})

$("#btn_user_account").click(function() {

	$(".wrap").hide(100)
	$(".user_account").show(100)

})

$("#icon_close_account").click(function() {

	$(".wrap").show(100)
	$(".user_account").hide(100)

})

$(".btn_close_account").click(function() {

	$(".wrap").show(100)
	$(".user_account").hide(100)

	$("#btn_user_account").hide(250)
	$("#btn_user").show(250)

})

$("#btn_basket").click(function() {

	$(".wrap").hide(100)
	$(".basket").show(100)

})

$("#mortal_combat_XL_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#mortal_combat_XL_img").show(300)
	$(".game_name").html("Гра Mortal Kombat XL Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("549 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#gta_V_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#gta_V_img").show(300)
	$(".game_name").html("Гра Grand Theft Auto V Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("НОВИЙ")
	$("#game_price").html("749 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#mortal_combat_11_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#mortal_combat_11_img").show(300)
	$(".game_name").html("Гра Mortal Kombat 11 XBOX One")
	$("#xbox_img").show(0)
	$("#playstation_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("749 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#mortal_combat_X_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#mortal_combat_X_img").show(300)
	$(".game_name").html("Гра Mortal Kombat X Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("499 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#days_gone_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#days_gone_img").show(300)
	$(".game_name").html("Гра Days Gone Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("НОВИЙ")
	$("#game_price").html("599 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#death_stranding_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#death_stranding_img").show(300)
	$(".game_name").html("Гра Death Stranding Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("999 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#detroit_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#detroit_img").show(300)
	$(".game_name").html("Гра Detroit: Become Human Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("999 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#ratched_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#ratched_img").show(300)
	$(".game_name").html("Гра Ratched & Clank Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("299 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#gta_V_xbox_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#gta_V_xbox_img").show(300)
	$(".game_name").html("Гра Grand Theft Auto V XBOX One")
	$("#xbox_img").show(0)
	$("#playstation_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("649 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#gta_IV_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#gta_IV_img").show(300)
	$(".game_name").html("Гра Grand Theft Auto IV Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("229 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#battlefield_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#battlefield_img").show(300)
	$(".game_name").html("Гра Battlefield 4 XBOX 360")
	$("#xbox_img").show(0)
	$("#playstation_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("179 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#gta_SA_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#gta_SA_img").show(300)
	$(".game_name").html("Гра GTA San Andreas PlayStation 3")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("699 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#god_of_war_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#god_of_war_img").show(300)
	$(".game_name").html("Гра God Of War PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("449 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#horizen_zero_dawn_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#horizen_zero_dawn_img").show(300)
	$(".game_name").html("Гра Horizen Zero Dawn Sony PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("Б/У")
	$("#game_price").html("149 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#RDR_2_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#RDR_2_img").show(300)
	$(".game_name").html("Гра Red Dead Redemption 2 PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("НОВИЙ")
	$("#game_price").html("999 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#the_last_of_us_img_account").click(function() {

	$(".basket").hide(0)
	$(".buy_page").show(0)
	$(".game_info").show(0)
	$("#btn_close").show(100)

	$("#the_last_of_us_img").show(300)
	$(".game_name").html("Гра The Last Of Us 2 PlayStation 4")
	$("#playstation_img").show(0)
	$("#xbox_img").hide(0)
	$("#game_state").html("НОВИЙ")
	$("#game_price").html("999 ₴")

	$("#btn_buy").hide(0)
	$("#btn_description").css("margin-left", "-200px")

})

$("#icon_close_basket").click(function() {

	$(".wrap").show(100)
	$(".basket").hide(100)

})

$("#to_basket").click(function() {

	$(".user_account").hide(100)
	$(".basket").show(100)
	
})

$("#mortal_combat_XL_img_account").hide(0)
$("#gta_V_img_account").hide(0)
$("#mortal_combat_11_img_account").hide(0)
$("#mortal_combat_X_img_account").hide(0)
$("#days_gone_img_account").hide(0)
$("#death_stranding_img_account").hide(0)
$("#detroit_img_account").hide(0)
$("#ratched_img_account").hide(0)
$("#gta_V_xbox_img_account").hide(0)
$("#gta_IV_img_account").hide(0)
$("#battlefield_img_account").hide(0)
$("#gta_SA_img_account").hide(0)
$("#god_of_war_img_account").hide(0)
$("#horizen_zero_dawn_img_account").hide(0)
$("#RDR_2_img_account").hide(0)
$("#the_last_of_us_img_account").hide(0)

$("#btn_buy").click(function() {

	if (basket === 0) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#mortal_combat_XL_img_account").show(100)

		summary += 549
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		top_sales -= 1
		$("#categorie_choose_span_top_sales").html(top_sales)

		$("#mortal_combat_XL_PS").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 1) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#gta_V_img_account").show(100)

		summary += 749
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		top_sales -= 1
		$("#categorie_choose_span_top_sales").html(top_sales)

		$("#gta_V_PS").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 2) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#mortal_combat_11_img_account").show(100)

		summary += 749
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		top_sales -= 1
		$("#categorie_choose_span_top_sales").html(top_sales)

		$("#mortal_combat_11_XBOX").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 3) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#mortal_combat_X_img_account").show(100)

		summary += 499
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		top_sales -= 1
		$("#categorie_choose_span_top_sales").html(top_sales)

		$("#mortal_combat_X_PS").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 4) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#days_gone_img_account").show(100)

		summary += 599
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		adventures -= 1
		$("#categorie_choose_span_adventures").html(adventures)

		$("#days_gone_PS").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 5) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#death_stranding_img_account").show(100)

		summary += 999
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		adventures -= 1
		$("#categorie_choose_span_adventures").html(adventures)

		$("#death_stranding_PS").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 6) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#detroit_img_account").show(100)

		summary += 999
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		adventures -= 1
		$("#categorie_choose_span_adventures").html(adventures)

		$("#detroit_PS").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 7) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#ratched_img_account").show(100)

		summary += 299
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		adventures -= 1
		$("#categorie_choose_span_adventures").html(adventures)

		$("#ratched_PS").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 8) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#gta_V_xbox_img_account").show(100)

		summary += 649
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		shooter -= 1
		$("#categorie_choose_span_shooter").html(shooter)

		$("#gta_V_XBOX").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 9) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#gta_IV_img_account").show(100)

		summary += 229
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		shooter -= 1
		$("#categorie_choose_span_shooter").html(shooter)

		$("#gta_IV_PS").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 10) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#battlefield_img_account").show(100)

		summary += 179
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		shooter -= 1
		$("#categorie_choose_span_shooter").html(shooter)

		$("#battlefield_XBOX").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 11) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#gta_SA_img_account").show(100)

		summary += 699
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		shooter -= 1
		$("#categorie_choose_span_shooter").html(shooter)

		$("#gta_SA_PS").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 12) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#god_of_war_img_account").show(100)

		summary += 499
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		action -= 1
		$("#categorie_choose_span_action").html(action)

		$("#god_of_war_PS").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 13) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#horizen_zero_dawn_img_account").show(100)

		summary += 149
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		action -= 1
		$("#categorie_choose_span_action").html(action)

		$("#horizen_zero_dawn_PS").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 14) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#RDR_2_img_account").show(100)

		summary += 999
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		action -= 1
		$("#categorie_choose_span_action").html(action)

		$("#RDR_2_PS").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	} else if (basket === 15) {

		$(".basket").show(100)
		$(".buy_page").hide(100)

		$("#the_last_of_us_img_account").show(100)

		summary += 999
		$("#ammount").html(summary + " ₴")
		number_purchases += 1;
		$("#number_purchases").html(number_purchases)
		action -= 1
		$("#categorie_choose_span_action").html(action)

		$("#the_last_of_us_PS").hide(0)

		$("#btn_buy").hide(0)
		$("#btn_description").css("margin-left", "-200px")

	}

	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)

})

setTimeout(function() {

	$(".rate_me").slideDown(250)

}, 120000)

$("#emotion_sad").hide(0)
$("#emotion_normal").hide(0)
$("#emotion_happy").hide(0)
$("#emotion_smilling").hide(0)
$("#emotion_sad").hide(0)
$("#emotion_normal").hide(0)
$("#emotion_happy").hide(0)
$("#emotion_smilling").hide(0)

$("#star_one_yellow").hide(0)
$("#star_two_yellow").hide(0)
$("#star_three_yellow").hide(0)
$("#star_four_yellow").hide(0)
$("#star_five_yellow").hide(0)

$("#star_one").mouseenter(function() {

	$("#emotion_sad").show(0)
	$("#emotion_good").hide(0)
	$("#emotion_normal").hide(0)
	$("#emotion_happy").hide(0)
	$("#emotion_smilling").hide(0)

	$("#star_one").hide(0)
	$("#star_one_yellow").show(0)

})

$("#star_one_yellow").mouseleave(function() {

	$("#star_one").show(0)
	$("#star_one_yellow").hide(0)

})

$("#star_two").mouseenter(function() {

	$("#emotion_normal").show(0)
	$("#emotion_good").hide(0)
	$("#emotion_sad").hide(0)
	$("#emotion_happy").hide(0)
	$("#emotion_smilling").hide(0)

	$("#star_one").hide(0)
	$("#star_two").hide(0)
	$("#star_one_yellow").show(0)
	$("#star_two_yellow").show(0)

})

$("#star_two_yellow").mouseleave(function() {

	$("#star_one").show(0)
	$("#star_two").show(0)
	$("#star_one_yellow").hide(0)
	$("#star_two_yellow").hide(0)

})

$("#star_three").mouseenter(function() {

	$("#emotion_good").show(0)
	$("#emotion_sad").hide(0)
	$("#emotion_normal").hide(0)
	$("#emotion_happy").hide(0)
	$("#emotion_smilling").hide(0)

	$("#star_one").hide(0)
	$("#star_two").hide(0)
	$("#star_three").hide(0)
	$("#star_one_yellow").show(0)
	$("#star_two_yellow").show(0)
	$("#star_three_yellow").show(0)

})

$("#star_three_yellow").mouseleave(function() {

	$("#star_one").show(0)
	$("#star_two").show(0)
	$("#star_three").show(0)
	$("#star_one_yellow").hide(0)
	$("#star_two_yellow").hide(0)
	$("#star_three_yellow").hide(0)

})

$("#star_four").mouseenter(function() {

	$("#emotion_happy").show(0)
	$("#emotion_good").hide(0)
	$("#emotion_normal").hide(0)
	$("#emotion_sad").hide(0)
	$("#emotion_smilling").hide(0)

	$("#star_one").hide(0)
	$("#star_two").hide(0)
	$("#star_three").hide(0)
	$("#star_four").hide(0)
	$("#star_one_yellow").show(0)
	$("#star_two_yellow").show(0)
	$("#star_three_yellow").show(0)
	$("#star_four_yellow").show(0)

})

$("#star_four_yellow").mouseleave(function() {

	$("#star_one").show(0)
	$("#star_two").show(0)
	$("#star_three").show(0)
	$("#star_four").show(0)
	$("#star_one_yellow").hide(0)
	$("#star_two_yellow").hide(0)
	$("#star_three_yellow").hide(0)
	$("#star_four_yellow").hide(0)

})

$("#star_five").mouseenter(function() {

	$("#emotion_smilling").show(0)
	$("#emotion_good").hide(0)
	$("#emotion_normal").hide(0)
	$("#emotion_happy").hide(0)
	$("#emotion_sad").hide(0)

	$("#star_one").hide(0)
	$("#star_two").hide(0)
	$("#star_three").hide(0)
	$("#star_four").hide(0)
	$("#star_five").hide(0)
	$("#star_one_yellow").show(0)
	$("#star_two_yellow").show(0)
	$("#star_three_yellow").show(0)
	$("#star_four_yellow").show(0)
	$("#star_five_yellow").show(0)

})

$("#star_five_yellow").mouseleave(function() {

	$("#star_one").show(0)
	$("#star_two").show(0)
	$("#star_three").show(0)
	$("#star_four").show(0)
	$("#star_five").show(0)
	$("#star_one_yellow").hide(0)
	$("#star_two_yellow").hide(0)
	$("#star_three_yellow").hide(0)
	$("#star_four_yellow").hide(0)
	$("#star_five_yellow").hide(0)

})

$("#star_one_yellow").click(function() {

	$(".rate_me").slideUp(500)

})

$("#star_two_yellow").click(function() {

	$(".rate_me").slideUp(500)

})

$("#star_three_yellow").click(function() {

	$(".rate_me").slideUp(500)

})

$("#star_four_yellow").click(function() {

	$(".rate_me").slideUp(500)

})

$("#star_five_yellow").click(function() {

	$(".rate_me").slideUp(500)

})

$("#clear_basket").click(function() {

	$("#mortal_combat_XL_img_account").hide(0)
$("#gta_V_img_account").hide(0)
$("#mortal_combat_11_img_account").hide(0)
$("#mortal_combat_X_img_account").hide(0)
$("#days_gone_img_account").hide(0)
$("#death_stranding_img_account").hide(0)
$("#detroit_img_account").hide(0)
$("#ratched_img_account").hide(0)
$("#gta_V_xbox_img_account").hide(0)
$("#gta_IV_img_account").hide(0)
$("#battlefield_img_account").hide(0)
$("#gta_SA_img_account").hide(0)
$("#god_of_war_img_account").hide(0)
$("#horizen_zero_dawn_img_account").hide(0)
$("#RDR_2_img_account").hide(0)
$("#the_last_of_us_img_account").hide(0)

	summary = 0
	$("#ammount").html(summary + " ₴")
	number_purchases = 0;
	$("#number_purchases").html(number_purchases)

	$("#mortal_combat_XL_PS").show(0)
$("#gta_V_PS").show(0)
$("#mortal_combat_11_XBOX").show(0)
$("#mortal_combat_X_PS").show(0)
$("#days_gone_PS").show(0)
$("#death_stranding_PS").show(0)
$("#detroit_PS").show(0)
$("#ratched_PS").show(0)
$("#gta_V_XBOX").show(0)
$("#gta_IV_PS").show(0)
$("#battlefield_XBOX").show(0)
$("#gta_SA_PS").show(0)
$("#god_of_war_PS").show(0)
$("#horizen_zero_dawn_PS").show(0)
$("#RDR_2_PS").show(0)
$("#the_last_of_us_PS").show(0)

	top_sales = 4
	adventures = 4
	shooter = 4
	action = 4

	$("#categorie_choose_span_top_sales").html(top_sales)
	$("#categorie_choose_span_adventures").html(adventures)
	$("#categorie_choose_span_shooter").html(shooter)
	$("#categorie_choose_span_action").html(action)

})

$("#btn_to_basket").click(function() {

	$(".buy_page").hide(100)
	$(".basket").show(100)

	$("#mortal_combat_XL_img").hide(0)
$("#gta_V_img").hide(0)
$("#mortal_combat_11_img").hide(0)
$("#mortal_combat_X_img").hide(0)
$("#days_gone_img").hide(0)
$("#death_stranding_img").hide(0)
$("#detroit_img").hide(0)
$("#ratched_img").hide(0)
$("#gta_V_xbox_img").hide(0)
$("#gta_IV_img").hide(0)
$("#battlefield_img").hide(0)
$("#gta_SA_img").hide(0)
$("#god_of_war_img").hide(0)
$("#horizen_zero_dawn_img").hide(0)
$("#RDR_2_img").hide(0)
$("#the_last_of_us_img").hide(0)

})

