let abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_address",
				"type": "address"
			}
		],
		"name": "addNewAdmin",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "shop_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"name": "addNewShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_request",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_seller",
				"type": "uint256"
			}
		],
		"name": "confirmDemotionRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_request",
				"type": "uint256"
			}
		],
		"name": "confirmPromotionRequest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			}
		],
		"name": "deleteShop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_reply",
				"type": "uint256"
			}
		],
		"name": "dislikeReply",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			}
		],
		"name": "dislikeReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "text_reply",
				"type": "string"
			}
		],
		"name": "leaveReply",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "qtyStars",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "review_text",
				"type": "string"
			}
		],
		"name": "leaveReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_reply",
				"type": "uint256"
			}
		],
		"name": "likeReply",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			}
		],
		"name": "likeReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "requestDemotion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "shop_address",
				"type": "address"
			}
		],
		"name": "requestToPromotion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "switchRoleBack",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "switchToBuyer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_reply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_user",
				"type": "uint256"
			}
		],
		"name": "undoDisikeReply",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_user",
				"type": "uint256"
			}
		],
		"name": "undoDislikeReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_reply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_user",
				"type": "uint256"
			}
		],
		"name": "undoLikeReply",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_review",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "id_user",
				"type": "uint256"
			}
		],
		"name": "undoLikeReview",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "demotion_requests",
		"outputs": [
			{
				"internalType": "address",
				"name": "requester",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "request_status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPromotionRequests",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "requester",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "shop_address",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "request_status",
						"type": "bool"
					}
				],
				"internalType": "struct contract_shop.PromotionRequest[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			}
		],
		"name": "getSellersOfShop",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			}
		],
		"name": "getShop",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id_shop",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "shop_address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "address[]",
						"name": "sellers",
						"type": "address[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "review_sender",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "qtyStars",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "title",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "review_text",
								"type": "string"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "reply_sender",
										"type": "address"
									},
									{
										"internalType": "string",
										"name": "reply_text",
										"type": "string"
									},
									{
										"internalType": "address[]",
										"name": "likes_users",
										"type": "address[]"
									},
									{
										"internalType": "address[]",
										"name": "dislikes_users",
										"type": "address[]"
									}
								],
								"internalType": "struct contract_shop.Reply[]",
								"name": "replies",
								"type": "tuple[]"
							},
							{
								"internalType": "address[]",
								"name": "likes_users",
								"type": "address[]"
							},
							{
								"internalType": "address[]",
								"name": "dislikes_users",
								"type": "address[]"
							}
						],
						"internalType": "struct contract_shop.Review[]",
						"name": "reviews",
						"type": "tuple[]"
					}
				],
				"internalType": "struct contract_shop.Shop",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getShops",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id_shop",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "shop_address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "city",
						"type": "string"
					},
					{
						"internalType": "address[]",
						"name": "sellers",
						"type": "address[]"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "review_sender",
								"type": "address"
							},
							{
								"internalType": "uint256",
								"name": "qtyStars",
								"type": "uint256"
							},
							{
								"internalType": "string",
								"name": "title",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "review_text",
								"type": "string"
							},
							{
								"components": [
									{
										"internalType": "address",
										"name": "reply_sender",
										"type": "address"
									},
									{
										"internalType": "string",
										"name": "reply_text",
										"type": "string"
									},
									{
										"internalType": "address[]",
										"name": "likes_users",
										"type": "address[]"
									},
									{
										"internalType": "address[]",
										"name": "dislikes_users",
										"type": "address[]"
									}
								],
								"internalType": "struct contract_shop.Reply[]",
								"name": "replies",
								"type": "tuple[]"
							},
							{
								"internalType": "address[]",
								"name": "likes_users",
								"type": "address[]"
							},
							{
								"internalType": "address[]",
								"name": "dislikes_users",
								"type": "address[]"
							}
						],
						"internalType": "struct contract_shop.Review[]",
						"name": "reviews",
						"type": "tuple[]"
					}
				],
				"internalType": "struct contract_shop.Shop[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user_adr",
				"type": "address"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "password",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "role",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "shop_relation",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "sub_role",
						"type": "string"
					}
				],
				"internalType": "struct contract_shop.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "promotion_requests",
		"outputs": [
			{
				"internalType": "address",
				"name": "requester",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "shop_address",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "request_status",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "reviews_arr",
		"outputs": [
			{
				"internalType": "address",
				"name": "review_sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "qtyStars",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "review_text",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "shops",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id_shop",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "shop_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export default abi;